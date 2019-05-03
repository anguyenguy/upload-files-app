import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";


// import { PanelHeader, Stats, CardCategory, Tasks } from "../../components";
import PanelHeader from "../../../components/PanelHeader/PanelHeader";
import Stats from "../../../components/Stats/Stats";
import CardCategory from "../../../components/CardElements/CardCategory";
// import Tasks from "../../components/Tasks/Tasks";

// import { tasks } from "variables/general.jsx";

class DashBoardPage extends React.Component {
  render() {
    return (
      <div>
        
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
              <Card className="card-tasks">
                <CardHeader>
                  <CardCategory>Upload files</CardCategory>
                  <CardTitle tag="h4">Brown your files</CardTitle>
                </CardHeader>
                <CardBody>
                <div class="custom-file">
                  <input id="logo" type="file" class="custom-file-input"/>
                  <label for="logo" class="custom-file-label text-truncate">Choose file...</label>
                </div>
                </CardBody>
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
                  {/* <Tasks tasks={tasks} /> */}
                </CardBody>
                <CardFooter>
                  <hr />
                  <Stats>
                    {[
                      {
                        i: "now-ui-icons loader_refresh spin",
                        t: "Updated 30 seconds ago"
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

export default DashBoardPage;
