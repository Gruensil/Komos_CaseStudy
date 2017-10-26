			// PROTECTED REGION ID _zryXAJ93EeeQDN6CvfzAfw.transferAction ENABLED START
			if(this.fiveNotes != null && this.tenNotes != null && this.twentyNotes != null && this.fiftyNotes != null){
				this._dataService.initiateTransaction(localStorage.getItem('selectedAcc'), this.fiveNotes, this.tenNotes, this.twentyNotes, this.fiftyNotes);
				this._router.navigate(['/mainMenu']);
			}
			// PROTECTED REGION END