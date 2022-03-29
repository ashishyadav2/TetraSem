<?php
session_start();
if(!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !=true) {
    header("location: http://mini-project-unixm9.000webhostapp.com/PHP/login.php");
}
else {
    // echo $_SESSION['username'];
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="Images/" sizes="32x32">
    <link rel="stylesheet" href="http://mini-project-unixm9.000webhostapp.com/CSS/home.css">
    <link rel="stylesheet" href="http://mini-project-unixm9.000webhostapp.com/CSS/theme.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>To Do List: Home</title>
</head>
<body>
    <nav>
    <div class="logo"><a href="#" class="titleLink">To Do List</a></div>
        <div class="nav-btns">
            <p class="username">Welcome,<img src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"><?php echo $_SESSION['username']; ?></p>
            <a href="logout.php"><button class="login-btn">Logout</button></a>
        </div>
    </nav>
    <section>
        <div class="tabs">
            <p class="sectionHeading">Tabs</p>
            <div class="createTab">
                <input type="text" placeholder="Tab name">
                <button class="addTabBtn">+ Add New Tab</button>
            </div>
            <!-- <div class="box boxActive">
                <p class="boxHeading">Work</p>
                <div class="dots"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                <div class="boxOption">
                    <ul>
                    <li class="item1"><i class="fa fa-times" aria-hidden="true"></i></li>
                    <li class="item2"><i class="fa fa-pencil" aria-hidden="true"></i> Rename</li>
                    <li class="item3"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</li>
                </ul>
                </div>
            </div> -->
            <!-- <div class="box">
                <p class="boxHeading">Home</p>
                <div class="dots"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                <div class="boxOption">
                    <ul>
                    <li class="item1"><i class="fa fa-times" aria-hidden="true"></i></li>
                    <li class="item2"><i class="fa fa-pencil" aria-hidden="true"></i> Rename</li>
                    <li class="item3"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</li>
                </ul>
                </div>
            </div> -->
        </div>

        <div class="noteSection">
        <p class="sectionHeading">Note</p>
            <div class="createTab">
            <textarea name="textNote" id="note" cols="30" rows="10" placeholder="Write Note"></textarea>
                <button class="addTabBtn">+ Create New Note</button>
            </div>
            
            <!-- <div class="noteBox">
                <div class="dots"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                <div class="text"><p class="noteText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias odio mollitia ipsum? Fuga, architecto rem nihil enim, impedit quisquam libero facilis vel quas vitae quod nobis! Eaque iure iste maiores nobis aperiam possimus ratione. Asperiores laborum eveniet aspernatur assumenda nesciunt, sunt eius ipsum deserunt expedita impedit eum quae repellendus exercitationem, fuga libero minus reiciendis at dignissimos illo voluptatum, similique sint quia beatae dolores. Rem ipsum dolores aspernatur architecto sit nesciunt, molestiae autem quia voluptate et, mollitia illo. Ipsum odio libero maiores illo ducimus rerum porro atque, hic consequatur voluptatum, error ex id quisquam saepe aperiam, tempore doloribus nemo aspernatur perferendis eum sit quidem quasi! Repellat iusto fugiat eligendi quia consequuntur molestias nulla optio quaerat enim, incidunt inventore sit excepturi dolore cum aliquam doloremque necessitatibus totam ipsum a nisi modi eveniet ratione? Quam ex corporis id, incidunt saepe quidem pariatur culpa minima, reprehenderit ipsam iusto? Iure quaerat obcaecati quo consectetur? Explicabo!</p></div>
                <div class="date">15-10-2022</div>
                <div class="boxOption">
                    <ul>
                    <li class="item1"><i class="fa fa-times" aria-hidden="true"></i></li>
                    <li class="item2"><i class="fa fa-pencil" aria-hidden="true"></i> Edit</li>
                    <li class="item3"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</li>
                </ul>
                </div>
            </div> -->

            <!-- <div class="noteBox">
                <div class="dots"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                <div class="text"><p class="noteText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias odio mollitia ipsum? Fuga, architecto rem nihil enim, impedit quisquam libero facilis vel quas vitae quod nobis! Eaque iure iste maiores nobis aperiam possimus ratione. Asperiores laborum eveniet aspernatur assumenda nesciunt, sunt eius ipsum deserunt expedita impedit eum quae repellendus exercitationem, fuga libero minus reiciendis at dignissimos illo voluptatum, similique sint quia beatae dolores. Rem ipsum dolores aspernatur architecto sit nesciunt, molestiae autem quia voluptate et, mollitia illo. Ipsum odio libero maiores illo ducimus rerum porro atque, hic consequatur voluptatum, error ex id quisquam saepe aperiam, tempore doloribus nemo aspernatur perferendis eum sit quidem quasi! Repellat iusto fugiat eligendi quia consequuntur molestias nulla optio quaerat enim, incidunt inventore sit excepturi dolore cum aliquam doloremque necessitatibus totam ipsum a nisi modi eveniet ratione? Quam ex corporis id, incidunt saepe quidem pariatur culpa minima, reprehenderit ipsam iusto? Iure quaerat obcaecati quo consectetur? Explicabo!</p></div>
                <div class="date">15-10-2022</div>
                <div class="boxOption">
                    <ul>
                    <li class="item1"><i class="fa fa-times" aria-hidden="true"></i></li>
                    <li class="item2"><i class="fa fa-pencil" aria-hidden="true"></i> Edit</li>
                    <li class="item3"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</li>
                </ul>
                </div>
            </div> -->
        </div>


        <div class="todoSection">
        <p class="sectionHeading">To Do List</p>
        <input type="text" placeholder="Add To Do List" class="input">
        <button class="addTabBtn">+ Create New Todo List</button>
        <!-- <div class="todoBox">
            <div class="todoHeading"><p class="todoTitle">Today</p><button>+</button></div>
            <div class="filter">
                <button class="filterBtn1 activeFilter">All</button>
                <button class="filterBtn2">Completed</button>
                <button class="filterBtn3">Pending</button>
        </div>
            <div class="todoListUl">
                <div class="checkBox"><input type="checkbox" name="check" class="checkbox"></div>
                <div class="todoText">Complete MP Practical LCM</div>
                <div class="delete"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                <div class="boxOption">
                    <ul>
                    <li class="item1"><i class="fa fa-times" aria-hidden="true"></i></li>
                    <li class="item2"><i class="fa fa-bell-o" aria-hidden="true"></i> Reminder</li>
                    <li class="item3"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</li>
                </ul>
                </div>
            </div>


            <div class="todoListUl">
                <div class="checkBox"><input type="checkbox" name="check" class="checkbox"></div>
                <div class="todoText">Maths Tutorial at 03:30 PM</div>
                <div class="delete"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
                <div class="boxOption">
                    <ul>
                    <li class="item1"><i class="fa fa-times" aria-hidden="true"></i></li>
                    <li class="item2"><i class="fa fa-bell-o" aria-hidden="true"></i> Reminder</li>
                    <li class="item3"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</li>
                </ul>
                </div>
            </div>

        </div>      -->
    </div>

    <div class="reminder">
        <div class="closebtn"><p>Reminder</p><button><i class="fa fa-times" aria-hidden="true"></i></button></div>
        <div class="remdate">
            <label for="date">Date</label>
            <input type="text" placeholder="Eg: 23/03/2022">
        </div>
        <div class="time">
            <label for="time">Time</label>
            <input type="text" placeholder="Eg: 20:30">
        </div>
        <button class="remind">Remind me</button>
    </div>
    </section>
    <script src="http://mini-project-unixm9.000webhostapp.com/JS/home.js"></script>
</body>
</html>