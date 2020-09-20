<template>
  <div class="sider-bar w-1/5 h-screen relative">
    <h2 class="mt-12">Admin</h2>
    <div>
      <img
        src="@/assets/icons/user.svg"
        alt="profile"
        class="rounded-full mx-auto mt-2" style="width: 107px; height: 107px; left: 52px; top: 95px;"
      />
    </div>

    <div id="nav" class="w-full pt-16">
      <router-link to="/dashboard">
        <button class="color-primary w-full py-5">
          <p class="text-left text-base pl-6">Dashboard</p>
        </button>
      </router-link>
      <router-link to="/dashboard-product">
        <button class="color-primary w-full py-5">
          <p class="text-left text-base pl-6">Product</p>
        </button>
      </router-link>
      <router-link to="/dashboard-user">
        <button class="color-primary w-full py-5">
          <p class="text-left text-base pl-6">User</p>
        </button>
      </router-link>
    </div>

    <div class="mx-auto bottom-0 right-0 left-0 absolute text-center pb-12">
        <router-link to="/">
            <button
                class="text-red-500 hover:text-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">
                Sign Out
            </button>
        </router-link>
    </div>
  </div>
</template>