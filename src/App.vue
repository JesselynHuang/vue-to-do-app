<template>
  <h1>Vue To Do App</h1>
  <!-- <AddNewTask @tasks="getData" /> -->

  <form @submit.prevent="handleSubmit">
    <h2 style="text-align: center">Create New Task</h2>
    <label>Title Task</label>
    <input type="text" v-model="title" />

    <label>Description Task</label>
    <br />
    <textarea
      placeholder="Write description..."
      v-model="description"
    ></textarea>

    <div class="submit">
      <button>Add Task</button>
    </div>
  </form>
  <h1>List of Task</h1>
  <div class="card">
    <ul>
      <li v-for="(task, index) in filteredTasks" :key="index">
        <div class="textWrapper">
          <h3 class="title">Title : {{ task.title }}</h3>
          <h3 class="description">Description : {{ task.description }}</h3>
          <button @click="updateTask(index)" class="btn">Edit</button>
          <button @click="deleteTask(index)" class="btn">Delete</button>
          <div class="checkWrapper">
            <h3 class="marked">Mark as done</h3>
            <input type="checkbox" v-model="task.isDone" @change="isDone" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      tasks: [
        {
          title: "Learning",
          description: "Learning Vue",
          isDone: false,
        },
      ],
      title: "",
      description: "",
      updatedTask: null,
      isDone: false,
    };
  },
  methods: {
    handleSubmit() {
      if (this.updatedTask !== null) {
        this.tasks[this.updatedTask].title = this.title;
        this.tasks[this.updatedTask].description = this.description;
        this.updatedTask = null;
      } else {
        this.tasks.push({
          title: this.title,
          description: this.description,
          isDone: this.isDone,
        });
      }

      (this.title = ""), (this.description = "");
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    updateTask(index) {
      this.title = this.tasks[index].title;
      this.description = this.tasks[index].description;
      this.updatedTask = index;
    },
  },
  computed: {
    filteredTasks() {
      return this.tasks.filter((task) => task.isDone === false);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
textarea {
  padding-top: 5px;
  padding-left: 5px;
  width: 400px;
  height: 100px;
  resize: none;
  border: 1px solid #ddd;
}
button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  cursor: pointer;
}
.submit {
  text-align: center;
}
li {
  flex-direction: row;
  list-style: none;
  border-bottom: 1px solid #ddd;
}
.textWrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  width: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: 400px;
}
.title {
  margin-right: 10px;
}
.marked {
  margin-left: 10px;
}
.btn {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
}
.checkWrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
