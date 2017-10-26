		// PROTECTED REGION ID _rFDacJ9mEeeQDN6CvfzAfw.getAccountBinding ENABLED START
        	var client = this._dataService.getClientById(localStorage.getItem('clientID'));
        
			this.accountBinding = this._dataService.getAccountsByClientId(client.clientID);
		// PROTECTED REGION END

		// PROTECTED REGION ID _vAz04LTcEeeUzbyM6lB9Aw.denominationAction ENABLED START
			localStorage.setItem('selectedAcc', this.selectedAccountBinding.accountID)
			this._router.navigate(['denomination']);
		// PROTECTED REGION END