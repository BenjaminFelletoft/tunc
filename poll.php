<!DOCTYPE html>
<html>
    <script>
        var poll_id = "<?php echo $_GET['poll_id']; ?>";
    </script>
    <?php require('layout.php') ?>
    <body>
        <div class="module-container col-lg-8 col-lg-offset-2">
            <div class="module-header">
                <h1 class="module-title"></h1>
                <p class="poll-author"></p>
                <p class="poll-date"></p>
            </div>
            <div class="module-content">
            </div>
        </div>
    </body>
    <script src="js/poll.js"></script>
</html>