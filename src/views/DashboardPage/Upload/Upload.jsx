import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row
} from "reactstrap";

// Combine redux
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/action';

// import { PanelHeader, Stats, CardCategory, Tasks } from "../../components";
import PanelHeader from "../../../components/PanelHeader/PanelHeader";
import Stats from "../../../components/Stats/Stats";
import CardCategory from "../../../components/CardElements/CardCategory";
// import Tasks from "../../components/Tasks/Tasks";

// import { tasks } from "variables/general.jsx";

class DashBoardPage extends React.Component {


  onDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  }

  onDragEnter = (e) => {
    e.stopPropagation();
    e.preventDefault();
  }

  onFileDrop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.props.onUploadFile(e.dataTransfer.files[0]);
  }


  render() {
    return (
      <div >
        
        <PanelHeader size="sm" />
        <div className="content" >
          <Row>
              <Card className="card-tasks">
                <CardHeader>
                  <CardCategory>Upload files</CardCategory>
                  {/* <CardTitle tag="h4">Brown your files</CardTitle> */}
                </CardHeader>
                    <div className="files-upload-user"
                      onDragEnter={this.onDragEnter}
                      onDragOver={this.onDragOver}
                      onDrop={this.onFileDrop}>
                      Drag and drop file here
                    </div>
                <CardFooter>
                  <Stats>
                    {[{ i: "now-ui-icons loader_refresh spin", t: "Updated" }]}
                  </Stats>
                </CardFooter>
              </Card>
          </Row>
          <Row>
              <Card className="card-tasks">
                <CardHeader>
                  <CardCategory>Prepare to upload</CardCategory>
                  <CardTitle tag="h4">Data</CardTitle>
                </CardHeader>
                <CardBody>
                  { this.props.fileData.map( result => {
                    return(
                      <div className="d-flex justify-content-around">
                        <div className="data-prepare ml-3 text-success">{result.file.name}</div>
                        <div className="">{result.file.size} bytes</div>
                      </div>
                    )
                  })}
                  {
                    (this.props.fileData.length>0)? 
                    <div className="d-flex justify-content-center">
                      <button type="button" class="btn btn-success">Upload now</button>
                    </div>:
                    
                    null
                  }
                </CardBody>
                <CardFooter>
                  <hr />
                  <Stats>
                    {[
                      {
                        i: "now-ui-icons loader_refresh spin",
                        t: "Updated immediately"
                      }
                    ]}
                  </Stats>
                </CardFooter>
              </Card>
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fileData : state.fil.files
  }
};

const mapDispatchToProps = dispatch => {
  return {
      onUploadFile: (file) => dispatch({type: actionTypes.UPLOADFILE, file:file})
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(DashBoardPage);
