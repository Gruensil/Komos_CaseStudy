import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Profile } from '../context/profile/profile'
import { Subscription } from 'rxjs/Subscription';
import { ContextControllerService } from '../context/contextController.service';


@Component({
    selector: 'noolstestbar',
    template: `
        <div class="container" >
            <div class="checkbox">
                <label><input type="checkbox" [(ngModel)]="active" (ngModelChange)="setActivation()">Context Tracking</label>
                <label><input type="checkbox" [(ngModel)]="dashboard">ToggleDashboard</label>
                <a (click)="logout()" href="">Click Here to logout</a>
            </div>
        </div>
        <div class="container-fluid" [hidden]="!dashboard">
            <div class="row">
                <div class="col-md-3">
                    <table class="table table-striped">
                        <th><h3>Platform</h3></th>
                        <tr>
                            <td>Device Type:</td>
                            <td>{{deviceType}}</td>
                        </tr>
                    </table>
                </div>
                <div class="col-md-3">
                    <table class="table table-striped">
                        <th><h3>App</h3></th>
                        <tr>
                            <td>User Role:</td>
                            <td>{{userRole}}</td> 
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    	`
})

// class for testing nools by setting context attributes in a ui bar
export class NoolsTestBarComponent {
  
    private active: boolean;
    private dashboard: boolean;

    private profile: Profile;
    private change: Subscription;

    private deviceType;
    private userRole;

//    private userWeakVision: boolean;
//    private userSelfEfficiacy: string;

    constructor(
        private _service : AuthenticationService,
        private _context : ContextControllerService
    ) {
        this.active = true;
        this.profile = this._context.getProfile();
        this.change = this._context.changedSubject.subscribe(change => {

            this.deviceType = this.profile.getPlatform().getDeviceType();
            this.userRole = this.profile.getApp().getUserRole();
            

            this._context.setNotChanged();
		});
    }

    logout() {
        this._service.logout();
    }
  
    setActivation(){
        this._context.setActivation(this.active);
    }
}