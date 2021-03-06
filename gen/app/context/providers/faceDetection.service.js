// Generated by ContextProviderGenerator
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Contains Objects that push new data to the Context Controller
// Code for API/Library access has to be inserted in the file:"faceDetection.service.ts" 
// in the folder: static/app/context/providers/
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
var Mood_1 = require('../types/Mood');
// PROTECTED REGION END
var FaceDetectionService = (function () {
    // PROTECTED REGION ID faceDetection ENABLED START
    // PROTECTED REGION END
    function FaceDetectionService() {
        var _this = this;
        this._ageSubject = new Rx_1.BehaviorSubject(0);
        this.ageSubject = this._ageSubject.asObservable();
        this._moodSubject = new Rx_1.BehaviorSubject(0);
        this.moodSubject = this._moodSubject.asObservable();
        this._faceDetectedSubject = new Rx_1.BehaviorSubject(false);
        this.faceDetectedSubject = this._faceDetectedSubject.asObservable();
        // PROTECTED REGION ID constructor ENABLED START
        setTimeout(function () {
            var divRoot = $("#affdex_elements")[0];
            // The captured frame's width in pixels
            var width = 640;
            // The captured frame's height in pixels
            var height = 480;
            /*
            Face detector configuration - If not specified, defaults to
            affdex.FaceDetectorMode.LARGE_FACES
            */
            var faceMode = affdex.FaceDetectorMode.LARGE_FACES;
            //Construct a CameraDetector and specify the image width / height and face detector mode.
            var detector = new affdex.CameraDetector(divRoot, width, height, faceMode);
            $("#affdex_elements").hide();
            detector.detectEmotions.joy = true;
            detector.detectEmotions.anger = true;
            detector.detectAppearance.age = true;
            //Add a callback to notify when the detector is initialized and ready for runing.
            detector.addEventListener("onInitializeSuccess", function () {
                console.log("The detector reports initialized");
                //Display canvas instead of video feed because we want to draw the feature points on it
                $("#face_video_canvas").css("display", "none");
                $("#face_video").css("display", "none");
            });
            //Add a callback to notify when camera access is allowed
            detector.addEventListener("onWebcamConnectSuccess", function () {
                console.log("Webcam access allowed");
            });
            //Add a callback to notify when camera access is denied
            detector.addEventListener("onWebcamConnectFailure", function () {
                console.log("webcam denied");
            });
            //Add a callback to notify when detector is stopped
            detector.addEventListener("onStopSuccess", function () {
                console.log("The detector reports stopped");
            });
            _this.mood = Mood_1.Mood.indifferent;
            _this.age = 0;
            detector.addEventListener("onImageResultsSuccess", function (faces, image, timestamp) {
                // console.log("Timestamp: " + timestamp.toFixed(2));
                // console.log("Number of faces found: " + faces.length);
                if (faces.length > 0) {
                    _this.faceDetected = true;
                    //If joy of the first face is over 50% then show in log
                    // console.log("Emotions: " + JSON.stringify(faces[0].emotions, function(key, val) {
                    // return val.toFixed ? Number(val.toFixed(0)) : val;
                    // }));
                    if (faces[0].emotions.anger > 10) {
                        _this.mood = Mood_1.Mood.angry;
                    }
                    else if (faces[0].emotions.joy > 15) {
                        _this.mood = Mood_1.Mood.happy;
                    }
                    else {
                        _this.mood = Mood_1.Mood.indifferent;
                    }
                    // console.log(faces[0].appearance.age);
                    switch (faces[0].appearance.age) {
                        case 'Under 18':
                            {
                                _this.age = 10;
                                break;
                            }
                            ;
                        case '18 - 24':
                            {
                                _this.age = 20;
                                break;
                            }
                            ;
                        case '25 - 34':
                            {
                                _this.age = 30;
                                break;
                            }
                            ;
                        case '35 - 44':
                            {
                                _this.age = 40;
                                break;
                            }
                            ;
                        case '45 - 54':
                            {
                                _this.age = 50;
                                break;
                            }
                            ;
                        case '55 - 64':
                            {
                                _this.age = 60;
                                break;
                            }
                            ;
                        case '65+':
                            {
                                _this.age = 70;
                                break;
                            }
                            ;
                    }
                }
                else {
                    _this.faceDetected = false;
                }
            });
            detector.start();
        }, 500);
        // PROTECTED REGION END
    }
    FaceDetectionService.prototype.getAge = function () {
        // PROTECTED REGION ID age ENABLED START
        // PROTECTED REGION END
        this._ageSubject.next(this.age);
    };
    FaceDetectionService.prototype.getMood = function () {
        // PROTECTED REGION ID mood ENABLED START
        // PROTECTED REGION END
        this._moodSubject.next(this.mood);
    };
    FaceDetectionService.prototype.getFaceDetected = function () {
        // PROTECTED REGION ID faceDetected ENABLED START
        // PROTECTED REGION END
        this._faceDetectedSubject.next(this.faceDetected);
    };
    FaceDetectionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FaceDetectionService);
    return FaceDetectionService;
}());
exports.FaceDetectionService = FaceDetectionService;
//# sourceMappingURL=faceDetection.service.js.map