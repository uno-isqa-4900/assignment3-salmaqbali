<template>
  <div class="app">
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark">
        <router-link to="/">
          <h1 class="navbar-brand"><span>Subscriptions</span> App</h1>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link class="nav-link pr-3" to="/create"
                >Add Subscription</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/"
                >View Subscriptions</router-link
              >
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <main>
      <router-view class="modify"></router-view>
    </main>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@500&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira Sans", san-serif;

  &::selection {
    background: transparentize(#42b883, 0.5);
  }
}

body {
  background-color: #35495b;
}

a {
  text-decoration: none;
}

header {
  display: flex;
  padding: 10px 16px;
  background-color: #2c3d4e;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);

  h1 {
    color: #fff;
    font-size: 28px;

    span {
      color: #42b883;
    }
  }
}

h3 {
  padding-top: 10px;
}

.modify {
  padding: 10px;
}
</style>
