<template>
  <div class="container">
    <div style="margin: auto;">
      <router-link
        to="/"
        class="iconButton navIcon"
      >
        <arrow-left-circle-icon size="1.5x" />
      </router-link>

      <h1 class="subtitle">
        Retrospective Board
      </h1>

      <div class="inputContainer">
        <input
          id="name"
          v-model="newItem"
          placeholder="Enter new item"
          type="text"
          name="name"
        >

        <div class="dropdown">
          <button class="dropbtn">
            Add Item
          </button>
          <div class="dropdownContent">
            <ul>
              <li @click="addKeep">
                Keep
              </li>
              <li @click="addAdd">
                Add
              </li>
              <li @click="addMore">
                More
              </li>
              <li @click="addLess">
                Less
              </li>
              <li @click="addAction">
                Action Items
              </li>
            </ul>
          </div>
        </div>

        <a
          @click="exportBoard()"
        >
          <download-icon class="iconButton" />
        </a>
      </div>

      <div class="flex justify-center flex-wrap cardContainer">
        <div class="card">
          <h2 class="cardTitle">
            <b>Keep</b>
          </h2>
          <draggable
            v-model="keepList"
            tag="ul"
            class="listColumn"
            group="retro"
            handle=".handle"
          >
            <li
              v-for="item in keepList"
              :key="item.id"
              class="listItem"
            >
              <move-icon class="handle" />
              <span class="text">{{ item.name }} </span>
              <x-circle-icon class="delete" @click="removeFromKeep(item)" />
            </li>
          </draggable>
        </div>

        <div class="card">
          <h2 class="cardTitle">
            <b>Add</b>
          </h2>
          <draggable
            v-model="addList"
            tag="ul"
            class="listColumn"
            group="retro"
            handle=".handle"
          >
            <li
              v-for="item in addList"
              :key="item.id"
              class="listItem"
            >
              <move-icon class="handle" />
              <span class="text">{{ item.name }} </span>
              <x-circle-icon class="delete" @click="removeFromAdd(item)" />
            </li>
          </draggable>
        </div>

        <div class="card">
          <h2 class="cardTitle">
            <b>More</b>
          </h2>
          <draggable
            v-model="moreList"
            tag="ul"
            class="listColumn"
            group="retro"
            handle=".handle"
          >
            <li
              v-for="item in moreList"
              :key="item.id"
              class="listItem"
            >
              <move-icon class="handle" />
              <span class="text">{{ item.name }} </span>
              <x-circle-icon class="delete" @click="removeFromMore(item)" />
            </li>
          </draggable>
        </div>

        <div class="card">
          <h2 class="cardTitle">
            <b>Less</b>
          </h2>
          <draggable
            v-model="lessList"
            tag="ul"
            class="listColumn"
            group="retro"
            handle=".handle"
          >
            <li
              v-for="item in lessList"
              :key="item.id"
              class="listItem"
            >
              <move-icon class="handle" />
              <span class="text">{{ item.name }} </span>
              <x-circle-icon class="delete" @click="removeFromLess(item)" />
            </li>
          </draggable>
        </div>

        <div class="cardLong">
          <h2 class="cardTitle">
            <b>Action Items</b>
          </h2>
          <draggable
            v-model="actionList"
            tag="ul"
            class="listColumnLong"
            group="actionItems"
            handle=".handle"
          >
            <li
              v-for="item in actionList"
              :key="item.id"
              class="listItem"
            >
              <move-icon class="handle" />
              <span class="text">{{ item.name }} </span>
              <x-circle-icon class="delete" @click="removeFromAction(item)" />
            </li>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import draggable from 'vuedraggable'
import {
  ArrowLeftCircleIcon,
  XCircleIcon,
  DownloadIcon,
  MoveIcon
} from 'vue-feather-icons'

export default {
  components: {
    draggable,
    ArrowLeftCircleIcon,
    XCircleIcon,
    DownloadIcon,
    MoveIcon
  },
  data: () => ({
    newItem: ''
  }),
  computed: {
    ...mapGetters([
      'keep',
      'add',
      'more',
      'less',
      'action',
      'state'
    ]),
    keepList: {
      get () {
        return this.keep
      },
      set (value) {
        this.setKeep(value)
      }
    },
    addList: {
      get () {
        return this.add
      },
      set (value) {
        this.setAdd(value)
      }
    },
    moreList: {
      get () {
        return this.more
      },
      set (value) {
        this.setMore(value)
      }
    },
    lessList: {
      get () {
        return this.less
      },
      set (value) {
        this.setLess(value)
      }
    },
    actionList: {
      get () {
        return this.action
      },
      set (value) {
        this.setAction(value)
      }
    }
  },
  methods: {
    ...mapMutations([
      'addToKeep',
      'addToAdd',
      'addToMore',
      'addToLess',
      'addToAction',
      'setKeep',
      'setAdd',
      'setMore',
      'setLess',
      'setAction',
      'removeFromKeep',
      'removeFromAdd',
      'removeFromMore',
      'removeFromLess',
      'removeFromAction'
    ]),
    addKeep () {
      if (this.newItem) {
        this.addToKeep({
          name: this.newItem
        })
        this.newItem = ''
      }
    },
    addAdd () {
      if (this.newItem) {
        this.addToAdd({
          name: this.newItem
        })
        this.newItem = ''
      }
    },
    addMore () {
      if (this.newItem) {
        this.addToMore({
          name: this.newItem
        })
        this.newItem = ''
      }
    },
    addLess () {
      if (this.newItem) {
        this.addToLess({
          name: this.newItem
        })
        this.newItem = ''
      }
    },
    addAction () {
      if (this.newItem) {
        this.addToAction({
          name: this.newItem
        })
        this.newItem = ''
      }
    },
    exportBoard () {
      const today = new Date()
      const day = String(today.getDate()).padStart(2, '0')
      const month = String(today.getMonth() + 1).padStart(2, '0')
      const year = today.getFullYear()

      const dateString = month + '-' + day + '-' + year

      const stateToExport = JSON.stringify(this.state)
      const stateBlog = new Blob([stateToExport], { type: 'text/plain' })
      const event = document.createEvent('MouseEvents')
      const a = document.createElement('a')
      a.download = dateString + '.json'
      a.href = window.URL.createObjectURL(stateBlog)
      a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
      event.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
      a.dispatchEvent(event)
    }
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  width: 100vw;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.inputContainer {
  margin: 2.5%
}

.cardContainer {
  width: 100vw;
}

@media only screen and (min-width: 768px) {
  .card {
    background-color: var(--card-background-color);
    border-radius: 4px;
    border: 1px solid var(--card-border-color);
    transition: 0.3s;
    margin: 2.5%;
    padding: 10px;
    flex: 0 0 20%;
    height: 30vh;
  }

  .listColumn {
    height: 25vh;
    overflow-y:auto;
  }

  .cardLong {
    background-color: var(--card-background-color);
    border-radius: 4px;
    border: 1px solid var(--card-border-color);
    transition: 0.3s;
    margin-top: 2.5%;
    margin-bottom: 5%;
    margin-left: 2.5%;
    margin-right: 2.5%;
    padding: 10px;
    flex: 0 0 95%;
    height: 30vh;
  }

  .listColumnLong {
    height: 25vh;
    overflow-y:auto;
  }
}

@media only screen and (max-width: 768px) {
  .card {
    background-color: var(--card-background-color);
    border-radius: 4px;
    border: 1px solid var(--card-border-color);
    transition: 0.3s;
    margin: 2.5%;
    padding: 10px;
    flex: 0 0 40%;
    height: 30vh;
    min-width: 150px;
  }

  .listColumn {
    height: 25vh;
    overflow-y:auto;
  }

  .cardLong {
    background-color: var(--card-background-color);
    border-radius: 4px;
    border: 1px solid var(--card-border-color);
    transition: 0.3s;
    margin-top: 2.5%;
    margin-bottom: 5%;
    margin-left: 2.5%;
    margin-right: 2.5%;
    padding: 10px;
    flex: 0 0 85%;
    height: 20vh;
    min-width: calc(300px + 5%);
  }

  .listColumnLong {
    height: 15vh;
    overflow-y:auto;
  }
}

.cardTitle {
  color: var(--card-text-color);
}

/* Styling the textbox to match the button */
input[type=text] {
  min-width: 100px;
  max-width: 300px;
  border: 1px solid #35495e;
  border-radius: 4px;
  padding: 10px 5px;
}

/* This section is for the dropdown button */
.dropbtn {
  background: var(--button-color);
  color: var(--button-text-color);
  border: 1px solid var(--button-border-color);
  border-radius: 4px;
  margin: 0;
  padding: 10px 5px;
  font-size: 1em;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdownContent {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdownContent li {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdownContent li:hover {
  background-color: #ddd;
  cursor: pointer;
}

.dropdown:hover .dropdownContent {
  display: block;
  animation: 0.25s dropdownhover;
}

.dropdown:hover .dropbtn {
  background: var(--button-hover-color);
  color: var(--button-text-hover-color);
  border: 1px solid var(--button-border-hover-color);
}

@keyframes dropdownhover{
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Styling the column list items */
.listItem {
  padding: 4px;
  margin: 4px;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;
  list-style-type: none;
  border: 1px solid #35495e;
  border-radius: 4px;
  user-select: none;
  overflow: hidden;
}

.list li:nth-child(odd) {
  background: #f9f9f9;
}

.itemName {
  margin: 10px;
}

.handle {
  float: left;
}

.delete {
  float: right;
}

.delete:hover {
  color: #ff0000;
}

.text {
  margin: 5px;
}
</style>
