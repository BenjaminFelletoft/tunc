<!DOCTYPE html>
<html>
    <script>
        var poll_id = "<?php echo $_GET['poll_id']; ?>";
    </script>
    <?php require('layout.php') ?>
    <body>
        <div class="module-container col-lg-8 col-lg-offset-2 jumbotron">
            <div class="module-header">
                <h1 class="module-title"></h1>
                <p class="poll-author"></p>
                <p class="poll-date"></p>
                <button id="edit-poll" class="edit-poll btn btn-primary">Edit</button>
            </div>
            <div class="module-content">
            </div>
        </div>
        <?php require('comments.php'); ?>
    </body>
    <script src="js/poll.js"></script>
</html>