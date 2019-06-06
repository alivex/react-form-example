import * as React from 'react';

import { Modal, ModalBody, Spinner} from 'reactstrap';        

class Loader extends React.Component{

  render(){
      return(
        <Modal isOpen={ this.props.open } centered={true}>
          <ModalBody>
              <Spinner type="grow" color="primary" />
              <Spinner color="dark" />
              <Spinner type="grow" color="secondary" />
              <Spinner color="info" />
              <Spinner type="grow" color="warning" />
              <Spinner color="success" />
              <Spinner type="grow" color="danger" />
              <Spinner color="success" />
              <Spinner type="grow" color="danger" />
              <Spinner color="warning" />
              <Spinner type="grow" color="info" />
              <Spinner color="secondary" />
              <Spinner type="grow" color="dark" />
              <Spinner color="primary" />
          </ModalBody>
        </Modal>
      )
  }
}

export default Loader;
