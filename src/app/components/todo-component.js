import React, {Component} from 'react';

export default class ToDoComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todo-app">
        <div className="todo-app__header">
          <div className="todo-app__title">React ToDo App</div>
          <input type="checkbox" className="todo-app__toggle-all" value="on" />
          <input className="todo-app__new-todo" placeholder="What needs to be done?" value="" /></div>
        <div className="todo-app__content">
          <div className="todo-list">
            <div className="todo-item todo-item--editing">
              <div className="todo-item__toggle"><input type="checkbox" value="on" /></div>
              <div className="todo-item__text">
                <div className="editable-text">
                  <div className="editable-text__out"><label>Push changes to Repo</label></div>
                  <div className="editable-text__input"><input className="edit" value="Push changes to Repo" /></div>
                </div>
              </div>
              <div className="todo-item__remover">
                <button className="destroy" />
              </div>
            </div>
            <div className="todo-item">
              <div className="todo-item__toggle"><input type="checkbox" value="on" /></div>
              <div className="todo-item__text">
                <div className="editable-text">
                  <div className="editable-text__out"><label>Create JSX Components</label></div>
                  <div className="editable-text__input"><input className="edit" value="Create JSX Components" /></div>
                </div>
              </div>
              <div className="todo-item__remover">
                <button className="destroy" />
              </div>
            </div>
            <div className="todo-item todo-item--completed">
              <div className="todo-item__toggle"><input type="checkbox" value="on" checked/></div>
              <div className="todo-item__text">
                <div className="editable-text">
                  <div className="editable-text__out"><label>Explore theory</label></div>
                  <div className="editable-text__input"><input className="edit" value="Explore theory" /></div>
                </div>
              </div>
              <div className="todo-item__remover">
                <button className="destroy" />
              </div>
            </div>
            <div className="todo-item todo-item--completed">
              <div className="todo-item__toggle"><input type="checkbox" value="on" checked/></div>
              <div className="todo-item__text">
                <div className="editable-text">
                  <div className="editable-text__out"><label>Clone Repo</label></div>
                  <div className="editable-text__input"><input className="edit" value="Clone Repo" /></div>
                </div>
              </div>
              <div className="todo-item__remover">
                <button className="destroy"/>
              </div>
            </div>
          </div>
          <div className="todo-list__footer">
            <span className="todo-list__info"><strong>2</strong>items left</span>
            <div className="todo-list__controls">
              <div className="tabs">
                <div className="tabs__item tabs__item--active"><a href="/">All</a></div>
                <div className="tabs__item"><a href="/active">Active</a></div>
                <div className="tabs__item"><a href="/completed">Completed</a></div>
              </div>
            </div>
            <button className="todo-list__clear-completed">Clear completed</button>
          </div>
        </div>
      </div>
    );
  }
}
ToDoComponent.propTypes = {};
