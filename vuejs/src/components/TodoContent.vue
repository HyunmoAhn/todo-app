<template>
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
</template>
