<template>
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
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
      title: "",
      description: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log("form submitted");
      this.tasks.push({
        title: this.title,
        description: this.description,
      });
      console.log("task--->", this.tasks)(
        (this.title = ""),
        (this.description = "")
      );
    },
  },
};
</script>

<style>
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
</style>
