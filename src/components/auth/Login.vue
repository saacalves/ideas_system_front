<template>
    <!-- <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Login</div>
                    <div class="panel-body">
                        <div class="alert alert-danger" v-if="error.error">{{error.message}}</div>
                        <form class="form-horizontal" @submit.prevent="login()" method="post">
                            <div class="form-group">
                                <label for="email" class="col-md-4 control-label">E-Mail Address</label>
                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control"
                                           name="email" required autofocus v-model="user.email">
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="password" class="col-md-4 control-label">Password</label>

                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control"
                                           name="password" required v-model="user.password">
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-md-8 col-md-offset-4">
                                    <button type="submit" class="btn btn-primary">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    
      <div class="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8">
          <div>
            <img class="w-auto h-12 mx-auto" src="" alt="Workflow">
            <h2 class="mt-6 text-3xl font-extrabold text-center text-gray-900">
              Faça login em sua conta
            </h2>
            <p class="mt-2 text-sm text-center text-gray-600">
              <span href="#" class="font-medium text-red-800 hover:text-indigo-500">{{error.message}}</span>
            </p>
          </div>
          <form class="mt-8 space-y-6" @submit.prevent="login()" method="POST">
            <input type="hidden" name="remember" value="true">
            <div class="-space-y-px rounded-md shadow-sm">
              <div>
                <label for="email-address" class="sr-only">Email</label>
                <input id="email-address" nam