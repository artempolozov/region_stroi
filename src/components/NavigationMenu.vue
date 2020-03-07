<template>
    <ul class="menu">
        <li><a href="./">Home</a></li>
        <li><a href="./test">Test</a></li>
		<li class="dropdown">

            <a href="javascript:void(0)" class="dropbtn">Dropdown</a>
            <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style scoped>
    .menu li {
        font-weight: 700;
        font-size: 18px;
        text-transform: uppercase;
        padding: 15px 10px;
    }
    .menu li:hover {
        cursor: pointer;
        color: red;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        vertical-align: middle;
        display: inline-block;
    }

    li {
        float: left;
    }

    li a, .dropbtn {
        display: inline-block;
        text-align: center;
        text-decoration: none;
        color: inherit;
    }

    li.dropdown {
        display: inline-block;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }

    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
    }

    .dropdown-content a:hover {background-color: #f1f1f1;}

    .dropdown:hover .dropdown-content {
        display: block;
    }
</style>