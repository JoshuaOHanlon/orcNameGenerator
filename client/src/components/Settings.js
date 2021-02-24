import React from 'react';
import styled from 'styled-components';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import deleteIcon from '../img/delete.png';
import editIcon from '../img/edit.png';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';


const SettingsStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 100%;
  text-align: center;

  h1 {
    color: var(--grey);
  }

  .aboutContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const TablesContStyle = styled.div`
  display: grid;
  grid-template-columns: 250px 250px 250px 250px;
  grid-template-rows: 400px;
  text-align: center;
  padding-top: 20px;
`;

const TableStyle = styled.div`
  .tableMaster {
    max-height: 100%;
    border: 1px solid var(--green);
    background: #E8E8E8;
    display: flex;
    flex-direction: column;
  }

  .list-group {
    max-height: inherit;
    overflow: scroll;
  }

  .list-group-item {
    display: flex;
    justify-content: space-between;
  }

  span {
    padding-left: 30px;
  }
  img {
    height: 20px;
    padding-left: 10px;
  }
`;

const ButtonStyle = styled.div`
  padding-top: 70px;
`;

const ModalStyle = styled.div`
  form {
    padding-bottom: 30px;
  }
`;

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      input: {
        part: 'first',
        title: ''
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  handleChange(e) {
    let input = this.state.input;
    input[e.target.name] = e.target.value;
    this.setState({ input })
  }

  handleSubmit(e) {
    const data = this.state.input;
    this.props.addTitle(data);

    this.hide();
  }

  handleEdit() {

  }

  handleDelete() {

  }

  render() {
    return (
      <SettingsStyle id='settings'>
        <div className='aboutContainer'>
          <h1>Settings</h1>
          <TablesContStyle>
            <TableStyle>
              <h3>First</h3>
              <div className='tableMaster'>
                <ListGroup>
                  {this.props.titles.first.map((title, i) => {
                      return <ListGroup.Item variant='success' key={i}>
                        {title}
                        <span>
                          <img src={editIcon}/>
                          <img src={deleteIcon}/>
                        </span>
                      </ListGroup.Item>
                    })}
                </ListGroup>
              </div>
            </TableStyle>
            <TableStyle>
              <h3>On</h3>
              <div className='tableMaster'>
                <ListGroup>
                  {this.props.titles.connector.map((title, i) => {
                    return <ListGroup.Item variant='success' key={i}>
                      {title}
                      <span>
                        <img src={editIcon}/>
                        <img src={deleteIcon}/>
                      </span>
                    </ListGroup.Item>
                  })}
                </ListGroup>
              </div>
            </TableStyle>
            <TableStyle>
              <h3>Last One</h3>
              <div className='tableMaster'>
                <ListGroup>
                  {this.props.titles.lastOne.map((title, i) => {
                    return <ListGroup.Item variant='success' key={i}>
                      {title}
                      <span>
                        <img src={editIcon}/>
                        <img src={deleteIcon}/>
                      </span>
                    </ListGroup.Item>
                  })}
                </ListGroup>
              </div>
            </TableStyle>
            <TableStyle>
              <h3>Last Two</h3>
              <div className='tableMaster'>
                <ListGroup>
                  {this.props.titles.lastTwo.map((title, i) => {
                    return <ListGroup.Item variant='success' key={i}>
                      {title}
                      <span>
                        <img src={editIcon}/>
                        <img src={deleteIcon}/>
                      </span>
                    </ListGroup.Item>
                  })}
                </ListGroup>
              </div>
            </TableStyle>
          </TablesContStyle>
        </div>
        <ButtonStyle>
          <Button variant='success' onClick={this.show.bind(this)}>New Title</Button>
          <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}>
                  <ModalStyle>
                    <form onChange={ this.handleChange }>
                      <select name='part'>
                        <option value='first'>First</option>
                        <option value='connector'>On</option>
                        <option value='lastOne'>Last One</option>
                        <option value='lastTwo'>Last Two</option>
                      </select><br/>
                      <input type='text' name='title' placeholder='Title'  />
                    </form>
                    <Button variant='success' onClick={this.handleSubmit}>Submit</Button>
                  </ModalStyle>
          </Rodal>
        </ButtonStyle>
      </SettingsStyle>
    )
  }
};

export default Settings;
