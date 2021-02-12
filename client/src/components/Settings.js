import React from 'react';
import styled from 'styled-components';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import deleteIcon from '../img/delete.png';
import editIcon from '../img/edit.png';

const SettingsStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  text-align: center;

  h1 {
    color: var(--green);
  }

  .aboutContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

const TablesContStyle = styled.div`
  display: grid;
  grid-template-columns: 250px 250px 250px 250px;
  grid-template-rows: 400px;
  text-align: center;
`;

const TableStyle = styled.div`
  .tableMaster {
    height: 100%;
    border: 1px solid var(--green);
    background: #E8E8E8;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style-position: inside;
    list-style-type: none;
  }
  li {
    border-bottom: 1px solid grey;
    padding: 5px;
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

  button {
    color: var(--green);
    background-color: white;
    border: 1px solid;
    border-color: var(--green);
    border-radius: 5px;
    height: 40px;
    width: 80px;
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
        <div className='container'>
          <h1>Settings</h1>
          <TablesContStyle>
            <TableStyle>
              <h3>First</h3>
              <div className='tableMaster'>
                <ul>
                  {this.props.titles.first.map((title, i) => {
                    return <li key={i}>
                      {title}
                      <span>
                        <img src={editIcon}/>
                        <img src={deleteIcon}/>
                      </span>
                    </li>
                  })}
                </ul>
              </div>
            </TableStyle>
            <TableStyle>
              <h3>On</h3>
              <div className='tableMaster'>
                <ul>
                  {this.props.titles.connector.map((title, i) => {
                    return <li key={i}>
                      {title}
                      <span>
                        <img src={editIcon}/>
                        <img src={deleteIcon}/>
                      </span>
                    </li>
                  })}
                </ul>
              </div>
            </TableStyle>
            <TableStyle>
              <h3>Last One</h3>
              <div className='tableMaster'>
                <ul>
                  {this.props.titles.lastOne.map((title, i) => {
                    return <li key={i}>
                      {title}
                      <span>
                        <img src={editIcon}/>
                        <img src={deleteIcon}/>
                      </span>
                    </li>
                  })}
                </ul>
              </div>
            </TableStyle>
            <TableStyle>
              <h3>Last Two</h3>
              <div className='tableMaster'>
                <ul>
                  {this.props.titles.lastTwo.map((title, i) => {
                    return <li key={i}>
                      {title}
                      <span>
                        <img src={editIcon}/>
                        <img src={deleteIcon}/>
                      </span>
                    </li>
                  })}
                </ul>
              </div>
            </TableStyle>
          </TablesContStyle>
        </div>
        <ButtonStyle>
          <button onClick={this.show.bind(this)}>New Title</button>
          <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}>
                  <div>
                    <form onChange={ this.handleChange }>
                      <select name='part'>
                        <option value='first'>First</option>
                        <option value='on'>On</option>
                        <option value='lastOne'>Last One</option>
                        <option value='lastTwo'>Last Two</option>
                      </select><br/>
                      <input type='text' name='title' placeholder='Title'  />
                    </form>
                    <button type='button' onClick={this.handleSubmit} >Submit</button>
                  </div>
          </Rodal>
        </ButtonStyle>
      </SettingsStyle>
    )
  }
};

export default Settings;
