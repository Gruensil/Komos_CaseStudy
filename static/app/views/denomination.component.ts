			// PROTECTED REGION ID _zryXAJ93EeeQDN6CvfzAfw.transferAction ENABLED START
			var five = 0
			var ten = 0
			var twenty = 0
			var fifty = 0

			if(this.fiveNotes != null){
				five = this.fiveNotes
			}if(this.tenNotes != null){
				ten = this.tenNotes
			}if(this.twentyNotes != null){
				twenty = this.twentyNotes
			}if(this.fiftyNotes != null){
				fifty = this.fiftyNotes
			}
			if((five+ten+twenty+fifty) > 0){
				this._dataService.initiateTransaction(localStorage.getItem('selectedAcc'), five, ten, twenty, fifty);
				this._router.navigate(['/mainMenu']);
			}
			// PROTECTED REGION END