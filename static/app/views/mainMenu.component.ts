		// PROTECTED REGION ID _rFDacJ9mEeeQDN6CvfzAfw.getAccountBinding ENABLED START
        var client = this._dataService.getClientById(localStorage.getItem('clientID'));
        
		this.accountBinding = this._dataService.getAccountsByClientId(client.clientID);
		// PROTECTED REGION END