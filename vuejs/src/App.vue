<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input class="new-todo" type="text" placeholder="What needs to be done?" />
      </header>
      <section class="main">
        <input class="toggle-all" id="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all async complete</label>
        <ul class="todo-list">
          <li>
            <div class="view">
              <input type="checkbox" class="toggle" />
              <label>value</label>
              <button class="destroy" />
            </div>
          </li>
          <li class="completed">
            <div class="view">
              <input type="checkbox" class="toggle" />
              <label>value2</label>
              <button class="destroy" />
            </div>
          </li>
          <li class="editing">
            <div class="view">
              <input type="checkbox" class="toggle" />
              <label>value2</label>
              <button class="destroy" />
            </div>
            <input type="text" class="edit" />
          </li>
        </ul>
      </section>
      <footer class="footer" style="{ display: 'block' }">
      <span class="todo-count"><strong>1</strong> item left</span>
      <ul class="filters">
        <li><a href="#/" class="selected">All</a></li>
        <li><a href="#/active">Active</a></li>
        <li><a href="#/completed">Completed</a></li>
      </ul>
      <button class="clear-completed" style="{ display: 'block' }">
      Clear completed
      </button>
      </footer>

    </section>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
