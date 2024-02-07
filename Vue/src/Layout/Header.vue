<template>
    <nav id="header" class="navbar navbar-absolute h3 text-white w-4">
        <div class="container-fluid" style="margin-top:10px;">
            {{this.$route.name}}
        </div>
    </nav>
</template>

<style>
#header {
    background-color: #1E1D2E;
    position: fixed;
    height: 78px;
}
</style>