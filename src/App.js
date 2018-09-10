import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as ns from 'node-sketch';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        }
    }

    _fileSelectedHandler = e => {
        let uploadedFile = e.target.files[0];
        console.log('file uploaded');
        // check format
        if (uploadedFile.name.split('.').pop().toLowerCase() !== 'sketch'){
            alert('please upload .sketch file');
        } else {
            // file reader
            let reader = new FileReader();
            // sketch read file
            ns.read(uploadedFile).then(sketch => {
                console.log(sketch.pages);
            })
        }
    };

    _fileUploadHandler = () => {
        console.log(this.state.selectedFile);
    };

    render() {
        return (
            <div className="App">
                <div>
                    <h2>Please upload sketch file here</h2>
                    <input type="file"
                           style={{
                                display: 'none'
                            }}
                           ref={fileInput => this.fileInput = fileInput}
                           name="file"
                           onChange={this._fileSelectedHandler}
                    />
                    <button onClick={() => this.fileInput.click()}>Pick File</button>
                </div>
            </div>
        );
    }
}

export default App;
