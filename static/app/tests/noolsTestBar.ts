import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Profile } from '../context/profile/profile'
import { Subscription } from 'rxjs/Subscription';
import { ContextControllerService } from '../context/contextController.service';
import { Language } from '../context/types/Language';
import { Level } from '../context/types/Level';
import { DeviceType } from '../context/types/DeviceType';
import { Mood } from '../context/types/Mood';


@Component({
    selector: 'noolstestbar',
    template: `
    <div id="affdex_elements" style="width:640px;height:480px;"></div>
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
                        <th><h3>User</h3></th>
                        <tr>
                            <td>Face Detected:</td>
                            <td>{{faceDetected}}</td> 
                        </tr>
                        <tr>
                            <td>Mood:</td>
                            <td>{{mood}}</td> 
                        </tr>
                        <tr>
                            <td>Age:</td>
                            <td>{{age}}</td> 
                        </tr>
                    </table>
                </div>
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
                        <th><h3>Environment</h3></th>
                        <tr>
                            <td>Movement:</td>
                            <td>{{movement}}</td> 
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
                        <tr>
                            <td>Mood Checked:</td>
                            <td>{{moodChecked}}</td> 
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
  
      private movement;
      private faceDetected;
      private mood;
      private age;
      private language;
      private deviceType;
      private userRole;
      private moodChecked;
  
      constructor(
          private _service : AuthenticationService,
          private _context : ContextControllerService
      ) {
          this.active = true;
          this.profile = this._context.getProfile();
          this.change = this._context.changedSubject.subscribe(change => {
              this.movement = Level[this.profile.getEnvironment().getMovement()];
              this.faceDetected = this.profile.getUser().getFaceDetected();
              this.mood = Mood[this.profile.getUser().getMood()];
              this.age = this.profile.getUser().getAge();
              this.language = Language[this.profile.getUser().getLanguage()];
              this.deviceType = this.profile.getPlatform().getDeviceType();
              this.userRole = this.profile.getApp().getUserRole();
              this.moodChecked = this.profile.getApp().getMoodChecked();
              
  
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