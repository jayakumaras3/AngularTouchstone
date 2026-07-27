<style>
    /* Style buttons inside table */
    button.collapsible {
        background-color: #4CAF50;
        /* Green background */
        color: white;
        padding: 6px 12px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
    }

    button.collapsible:hover {
        background-color: #45a049;
        /* Darker green on hover */
    }

    /* Remove borders around editable cells */
    td[contenteditable="true"] {
        background-color: #f7f7f7;
        /* Light background for editable cells */
        outline: none;
        /* Remove the default outline around editable cells */
    }

    /* Show collapsible content (Correct option area) */
    .contented {
        display: none;
        /* Hidden by default */
        background-color: #e9e9e9;
        /* Light background for collapsible content */
        padding: 10px;
        border-radius: 4px;
        margin-top: 5px;
    }

    button.collapsible:active+.contented {
        display: block;
        /* Show when button is clicked */
    }

    /* Add spacing for form inputs */
    .form-check-inline {
        margin-right: 10px;
    }

    .form-check-label {
        font-size: 14px;
    }

    .collapsible {

        /* color: white; */
        cursor: pointer;
        /* background-color: rgba(0, 0, 0, 0.4); */
        width: 100%;
        border: none;
        text-align: center;
        outline: none;
        font-size: 12px;
        padding: 2px;
    }

    .contented {
        /* color: white; */
        padding: 0 58px;
        display: none;
        overflow: hidden;
        /* background-color: rgba(0, 0, 0, 0.4); */

    }

    /* Add some styling to the "Add New Entry" button */
    #addRowBtn {
        /* padding: 8px 16px; */
        background-color: skyblue;
        color: white;
        border: none;
        /* border-radius: 4px; */
        cursor: pointer;
        /* margin-top: 10px; */
        /* font-size: 14px; */
    }

    #addRowBtn:hover {
        background-color: #45a049;
    }
</style>
<div class="col-xl-9 col-lg-12 order-lg-2 order-xl-1">

    <?php if (!empty($getAssessmentSettings)) {
        foreach ($getAssessmentSettings as $value) {
            $type = $value['type'];
            // print_r($type."<br/>");
            if ($type == 59) {
                $kyuselectscqdescrip = $value['value'];
            }
            if ($type == 60) {
                $kyuselectmcqdescrip = $value['value'];
            }
            if ($type == 61) {
                $kyusubmit = $value['value'];
            }
            if ($type == 68) {
                $kyupleaseselectanswer = $value['value'];
            }
        }
    }
    $kyuselectscqdescrip = (isset($kyuselectscqdescrip) && $kyuselectscqdescrip != '') ? $kyuselectscqdescrip : $assessment_scqmcq_sets['59'];
    $kyuselectmcqdescrip = (isset($kyuselectmcqdescrip) && $kyuselectmcqdescrip != '') ? $kyuselectmcqdescrip : $assessment_scqmcq_sets['60'];
    $kyusubmit = (isset($kyusubmit) && $kyusubmit != '') ? $kyusubmit : $assessment_scqmcq_sets['61'];
    $kyupleaseselectanswer = (isset($kyupleaseselectanswer) && $kyupleaseselectanswer != '') ? $kyupleaseselectanswer : $assessment_scqmcq_sets['68'];


    $userlevel = session('userlevel');
    $arrayuserlevel = array_map('intval', explode(',', $userlevel));
    ?>
    <script>
        // Store video time in seconds
        var TimeStore = 0;

        function GetVideoTime() {
            var vid1 = document.getElementById("vidArea");
            if (vid1) {
                var currentTime = vid1.currentTime;
                TimeStore = currentTime; // Update stored time
                return currentTime; // Format and return time
            }
            return ''; // Return null if video element is not found
        }

        // Helper function to format time as MM:SS
        function formatTime(seconds) {
            var mins = Math.floor(seconds / 60);
            var secs = Math.floor(seconds % 60);
            return mins + ":" + (secs < 10 ? "0" : "") + secs;
        }

        // Function to go to the stored time
        function goToSession(timeInSeconds) {

            var vid1 = document.getElementById("vidArea");
            if (vid1) {
                vid1.currentTime = timeInSeconds; // Seek to the stored time
                vid1.play(); // Start playing from that time
                console.log("Jumped to:", formatTime(timeInSeconds));
            }
        }

        // Function to show the current time of the video
        function showCurrentTime() {
            var formattedTime = GetVideoTime();
            if (formattedTime) {
                document.getElementById("currentTimeDisplay").innerText =
                    "Current Video Time: " + formattedTime + " (In seconds: " + TimeStore.toFixed(2) + ")";
                console.log("Current Video Time:", formattedTime);
            } else {
                document.getElementById("currentTimeDisplay").innerText =
                    "No video is currently playing.";
            }
        }
    </script>

    <?php if (isset($row) && !empty($row)) { ?>
        <div class="card">
            <div class="card-body">
                <div class="row justify-content-between py-1">
                    <div class="col-sm-7">
                        <div class="d-flex align-items-start">
                            <h4><?php echo abs($row['page_number']); ?> : <?php echo $page_name; ?> (
                                <?php
                                $type = $row['type'];
                                switch ($type) {
                                    case 1:
                                        echo 'Articulate';
                                        break;
                                    case 2:
                                        echo 'Video';
                                        break;
                                    case 8:
                                        echo 'Video Sub Page';
                                        break;
                                    case 3:
                                        echo 'Html';
                                        break;
                                    case 4:
                                        echo 'Quiz';
                                        break;
                                    case 5:
                                        echo 'SCQ';
                                        break;
                                    case 6:
                                        echo 'MCQ';
                                        break;
                                    case 9:
                                        echo 'Audio Version';
                                        break;
                                }

                                ?>

                                )
                            </h4>
                        </div>
                    </div>

                    <div class="col-auto">
                        <div id="tooltips-container">
                            <!-- <a href="<?php echo base_url('SCORM/course_builder/scorm_course_pages/page_edit_view') ?>"
                                class="text-reset font-19 py-1 px-2 d-inline-block">
                                <i class="mdi mdi-pencil-outline" data-bs-container="#tooltips-container"
                                    data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Edit"
                                    data-bs-original-title="Edit"></i>
                            </a> -->
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="btn-group">
                                    <form class="form-horizontal"
                                        action="<?php echo base_url('SCORM/course_builder/scorm_course_pages/page_edit_view') ?>"
                                        method="POST"><?= csrf_field() ?>
                                        <input type="hidden" name="page_id" value="<?php echo $page_id; ?>">
                                        <input type="hidden" name="page_number" value="<?php echo $page_number; ?>">
                                        <input type="hidden" name="page_name" value="<?php echo $page_name; ?>">

                                        <button type="submit" class="btn btn-sm btn-light waves-effect btn-icon-text">
                                            <i class="mdi mdi-pencil-outline font-16" title="Edit"></i>
                                            <span class="icon-number">Edit</span>

                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <style>
            .card-body td:nth-child(2) {
                max-width: 200px;
                /* Adjust the max-width value as needed */
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        </style>
        <?php $baseloc = '';
        $base = base_url();
        if ($base == 'http://localhost/Dochek_V3/Dochek_V3') {
            $baseloc = '/Users/pchandran/Sites/dochek_v3/Dochek_V3/';
        }
        if ($base == 'http://localhost/projects_dochek/') {
            $baseloc = 'D:/wampp/www/projects_dochek/';
        }
        if ($base == 'https://dochek.com/') {
            $baseloc = '/var/www/html/';
        }
        if ($base == 'https://www.aristo-tle.com') {
            $baseloc = '/';
        }
        if ($base == 'https://staging.dochek.com/') {
            $baseloc = '/var/www/html/DOCHEK/';
        }
        if ($base == 'http://localhost/DOCHEK/') {
            $baseloc = 'D:/wampp/www//DOCHEK/';
        }
        if ($base == 'http://172.16.2.218/DOCHEK/') {
            $baseloc = '/var/www/DOCHEK/';
        }
        ?>





        <div class="offcanvas offcanvas-end" tabindex="-1" id="theme-settings-offcanvas" aria-modal="true" role="dialog">
            <div class="offcanvas-body p-3 h-100" data-simplebar="init">
                <div class="simplebar-wrapper" style="margin: -24px;">
                    <div class="simplebar-height-auto-observer-wrapper">
                        <div class="simplebar-height-auto-observer"></div>
                    </div>
                    <div class="simplebar-mask">
                        <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                            <div class="simplebar-content-wrapper" tabindex="0" role="region"
                                aria-label="scrollable content" style="height: 100%; overflow: hidden scroll;">
                                <div class="simplebar-content" style="padding: 24px;">
                                    <form class="form-horizontal"
                                        action="<?php echo base_url('Task/Task_manage/add_new_task') ?>" method="POST"><?= csrf_field() ?>
                                        <div class="col-12 ">
                                            <div class="form-group mb-2">
                                                <label>Description</label>
                                                <textarea class="form-control" name="description"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group mb-2">
                                                <label>Assign To</label>
                                                <select class="form-select" name="assigned_to">
                                                    <?php if (isset($getUserlatestclientCourseByScenario)) {
                                                        foreach ($getUserlatestclientCourseByScenario as $users) {
                                                            echo '<option value="' . $users['id_user'];
                                                            echo '">';
                                                            echo $users['username'];
                                                            echo '</option>';
                                                        }
                                                    }
                                                    ?>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group mb-2">
                                                <label>Level</label>
                                                <select class="form-select" name="unit">
                                                    <?php
                                                    for ($x = 1; $x <= 10; $x++) {
                                                        echo '<option value="' . $x . '">' . $x . '</opiton>';
                                                    }
                                                    ?>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group mb-2">
                                                <label>Due Date</label>
                                                <input class="form-control" id="due_date" name="due_date" type="date"
                                                    value="">
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group mb-2">
                                                <label>Priority</label>
                                                <select class="form-select" name="priority">
                                                    <option value="High">High</option>
                                                    <option value="Medium">Medium</option>
                                                    <option value="Low">Low</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group mt-2 d-grid">
                                                <input type="hidden" name="feedbackid"
                                                    value="<?php echo $row['page_number']; ?>">
                                                <input type="hidden" name="course_id" value="<?php echo $course_id; ?>">
                                                <input type="hidden" name="type_of_task" value="3">
                                                <button
                                                    onclick="this.disabled=true;this.value='Sending, please wait...';this.form.submit();"
                                                    class="btn btn-sm btn-danger btn-block">Assign Task</button>
                                            </div>
                                        </div>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php
        $subpages_Count = count($sub_page_content);
        if ($subpages_Count > 0) {
            echo '<div class="row">';
            foreach ($sub_page_content as $subPages) {

        ?>
                <div class="col-3 col-md-3 col-lg-3">
                    <form class="form-horizontal mb-2" action="<?php echo base_url('SCORM/course_builder/Editor') ?>" method="POST"><?= csrf_field() ?>
                        <input type="hidden" name="page_id" value="<?php echo $subPages['page_id']; ?>">
                        <input type="hidden" name="page_name" value="<?php echo $subPages['page_name']; ?>">
                        <input type="hidden" name="page_number" value="<?php echo $subPages['page_number']; ?>">
                        <button type="submit"
                            class="btn btn-outline-dark waves-effect waves-light"><?php echo $subPages['page_number']; ?>
                            <?php echo $subPages['page_name']; ?></button>
                    </form>
                </div>
        <?php
            }
            echo '</div>';
        }
        ?>
        <div class="col-lg-12 col-xl-12">
            <div class="card">
                <div class="card-body">
                    <ul class="nav nav-pills nav-fill navtab-bg">
                        <li class="nav-item">
                            <a href="#content" data-bs-toggle="tab" aria-expanded="true" class="nav-link active">
                                Content
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#feedback" data-bs-toggle="tab" aria-expanded="false" class="nav-link">
                                Feedback
                            </a>
                        </li>
                        <!-- <li class="nav-item">
                        <a href="#storyboard" data-bs-toggle="tab" aria-expanded="false" class="nav-link ">
                            Audio
                        </a>
                    </li> -->
                    </ul>

                    <div class="tab-content">
                        <div class="tab-pane  show active" id="content">
                            <!--  review  page -->
                            <div class="row">
                                <div class="col-12 col-md-12 col-lg-12 mg-t-10">

                                    <?php
                                    if ($row['type'] == 3) {
                                        //HTML Page
                                        // Path for the iframe content
                                        $html_path = base_url() . "assets/assets/uploads/SCORM_course_document/" . $course_id . "/" . $coursedetails[0]['createdon'] . "/assets/html/" . $row['page_id'] . "/Screen_01.html";
                                        $path = FCPATH . "assets/assets/uploads/SCORM_course_document/" . $course_id . "/" . $coursedetails[0]['createdon'] . "/assets/html/" . $row['page_id'] . "/Screen_01.html"; ?>
                                        <?php if (file_exists($path)) { ?>
                                            <div class="iframe-container">
                                                <iframe class="responsive-iframe" src="<?php echo $html_path; ?>">
                                                    Your browser does not support iframes.
                                                </iframe>
                                            </div>
                                        <?php } else {
                                            echo '<h4>Page Under Development</h4>';
                                        } ?>
                                    <?php } elseif ($row['type'] == 1) {
                                        //Articulate Page
                                        // Path for Articulate content
                                        $articulate_path = base_url() . "assets/assets/uploads/SCORM_course_document/" . $course_id . "/" . $coursedetails[0]['createdon'] . "/assets/Articulate/" . $row['page_id'] . "/story.html";
                                        $path = FCPATH . "assets/assets/uploads/SCORM_course_document/" . $course_id . "/" . $coursedetails[0]['createdon'] . "/assets/Articulate/" . $row['page_id'] . "/story.html"; ?>
                                        <?php if (file_exists($path)) { ?>
                                            <div class="iframe-container">
                                                <iframe class="responsive-iframe" src="<?php echo $articulate_path; ?>">
                                                    Your browser does not support iframes.
                                                </iframe>
                                            </div>
                                        <?php } else {
                                            echo '<h4>Page Under Development</h4>';
                                        } ?>
                                    <?php } elseif ($row['type'] == 2 || $row['type'] == 8 || $row['type'] == 9) {
                                        //Video Page
                                        // Path for the video
                                        $Video = isset($pageVideo[0]['filename']) ? $pageVideo[0]['filename'] : '';
                                        $Vtt = isset($pageVtt[0]['filename']) ? $pageVtt[0]['filename'] : '';
                                        if ($Video != '') {
                                            $video_path = base_url() . "assets/assets/uploads/SCORM_course_document/" . $course_id . "/" . $coursedetails[0]['createdon'] . "/assets/video/" . $Video;
                                        }
                                        // if ($Vtt != '') {
                                        $vtt_path = base_url() . "assets/assets/uploads/SCORM_course_document/" . $course_id . "/" . $coursedetails[0]['createdon'] . "/assets/vtt/" . $Vtt;
                                        // }
                                        $path = FCPATH . "assets/assets/uploads/SCORM_course_document/" . $course_id . "/" . $coursedetails[0]['createdon'] . "/assets/video/" . $Video;

                                    ?>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <?php
                                                //echo $path; 
                                                //echo " - ".$row['video_upload'];
                                                if (file_exists($path) && ($Video != '')) { ?>

                                                    <video src="<?php echo $video_path; ?>" style="width: 100%; height: auto;"
                                                        id="vidArea" controls controlsList="nodownload" disablePictureInPicture>
                                                        <?php if (file_exists($vtt_path) && !empty($Vtt)) { ?>
                                                            <track id="englishTrack" kind="captions" src="<?php echo $vtt_path; ?>"
                                                                srclang="en" label="English" default>
                                                        <?php } ?>
                                                    </video>

                                                <?php } else {
                                                    echo '<h4>Page Under Development</h4>';
                                                } ?>
                                                <?php if ($row['type'] == 2 || $row['type'] == 8 || $row['type'] == 9) { ?>
                                                    <div class="row">
                                                        <?php if (!empty($pageVideo)) { ?>
                                                            <div class="col-12 col-md-12 col-lg-12">
                                                                <div class="card">
                                                                    <div class="card-body">
                                                                        <?php
                                                                        $folderloc = $baseloc . 'assets/assets/uploads/SCORM_course_document/' . $course_id . '/' . $row['createdon'] . '/assets/video';
                                                                        //  print_r($fileloc);
                                                                        if (!empty($pageVideo)) {
                                                                            echo '<table class="table  table-sm">';
                                                                            echo '<tr><th>Video File</th><th>On</th><th>By</th><th>Del</th></tr>';

                                                                            foreach ($pageVideo as $video) {

                                                                                echo '<tr><td>';
                                                                                echo $video['filename'];
                                                                                echo '</td><td>';
                                                                                // if ($video['language'] == 1) {
                                                                                //     echo 'English';
                                                                                // } elseif ($video['language'] == 2) {
                                                                                //     echo 'Spanish';
                                                                                // } elseif ($video['language'] == 3) {
                                                                                //     echo 'French';
                                                                                // }
                                                                                // echo '</td><td>';
                                                                                echo date('d-m-Y', $video['createdon']);
                                                                                echo '</td><td>';
                                                                                echo $video['createdby'];
                                                                                echo '</td><td>'; ?>
                                                                                <?php if (in_array('46', $arrayuserlevel) || in_array('5', $arrayuserlevel) && $row['status'] != 8) { ?>
                                                                                    <form class="form-horizontal"
                                                                                        action="<?php echo base_url('SCORM/course_builder/Scorm_course_pages/del_file'); ?>"
                                                                                        method="POST"><?= csrf_field() ?>
                                                                                        <input type="hidden" name="page_id"
                                                                                            value="<?php echo $row['page_id'] ?>">
                                                                                        <input type="hidden" name="fileloc"
                                                                                            value="<?php echo $folderloc . '/' . $video['filename']; ?>">
                                                                                        <input type="hidden" name="file_name"
                                                                                            value="<?php echo $video['filename']; ?>">
                                                                                        <button type="submit" class="btn btn-outline-danger waves-effect btn-xs waves-light"
                                                                                            onclick="return confirm('<?php echo lang('Alert.Aler_003') ?>')"><span
                                                                                                class="mdi mdi-trash-can-outline"></span> Delete</button>
                                                                                    </form>
                                                                                <?php } ?>
                                                                        <?php echo '</td></tr>';
                                                                            }
                                                                            echo '</table>';
                                                                        } else {
                                                                            echo 'No Video Files';
                                                                        }
                                                                        ?>

                                                                    </div>
                                                                </div>

                                                            </div>
                                                        <?php } ?>
                                                        <?php if (empty($pageVideo)) { ?>
                                                            <?php if ($row['status'] != 8) { ?>
                                                                <div class="col-12 col-md-12 col-lg-12 mg-t-10">
                                                                    <div class="card">

                                                                        <div class="card-body">
                                                                            <div class="form-row">
                                                                                <form class="form-horizontal2" enctype="multipart/form-data"
                                                                                    action=<?php echo base_url('SCORM/course_builder/scorm_course_pages/uploadvideo'); ?> method="post" id="uploadForm"><?= csrf_field() ?>
                                                                                    <div class="form-group col-md-12 mb-2">
                                                                                        <label>Select Language</label>
                                                                                        <select name="language" class="form-control">
                                                                                            <option value="1">English</option>
                                                                                            <option value="2">Spanish</option>
                                                                                            <option value="3">French</option>
                                                                                        </select>
                                                                                    </div>
                                                                                    <div class="form-group col-md-6 mb-2">
                                                                                        <input type="file" name="file" accept=".mp4,.MP4"
                                                                                            required />
                                                                                    </div>
                                                                                    <div class="form-group col-md-12 mb-2">
                                                                                        <input type="hidden" name="course_id"
                                                                                            value="<?php echo $course_id ?>">
                                                                                        <input type="hidden" name="page_id"
                                                                                            value="<?php echo $page_id ?>">
                                                                                        <button type="submit"
                                                                                            class="btn btn-outline-warning waves-effect btn-sm waves-light form-control"
                                                                                            id="uploadButton">Upload Video</button>
                                                                                    </div>
                                                                                    <?php if (isset($promovalidation)): ?>
                                                                                        <div class="form-group col-md-12">
                                                                                            <div class="alert alert-white" role="alert">
                                                                                                <?= $promovalidation->listErrors() ?>
                                                                                            </div>
                                                                                        </div>
                                                                                    <?php endif; ?>
                                                                                </form>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            <?php } ?>
                                                        <?php } ?>

                                                        <?php if ($row['type'] == 2 || $row['type'] == 8 || $row['type'] == 9) { ?>

                                                            <div class="col-12 col-md-12 col-lg-12">
                                                                <div class="card">
                                                                    <div class="card-body">
                                                                        <?php
                                                                        $fileloc = $baseloc . 'assets/assets/uploads/SCORM_course_document/' . $course_id . '/' . $row['createdon'] . '/assets/vtt';
                                                                        //  print_r($fileloc);
                                                                        if (!empty($pageVtt)) {
                                                                            echo '<table class="table  table-sm">';
                                                                            echo '<tr><th>VTT File</th><th>On</th><th>By</th><th>Del</th></tr>';

                                                                            foreach ($pageVtt as $vtt) {

                                                                                echo '<tr><td>';
                                                                                echo $vtt['filename'];
                                                                                // echo '</td><td>';
                                                                                // if ($vtt['language'] == 1) {
                                                                                //     echo 'English';
                                                                                // } elseif ($vtt['language'] == 2) {
                                                                                //     echo 'Spanish';
                                                                                // } elseif ($vtt['language'] == 3) {
                                                                                //     echo 'French';
                                                                                // }
                                                                                echo '</td><td>';
                                                                                echo date('d-m-Y', $vtt['createdon']);
                                                                                echo '</td><td>';
                                                                                echo $vtt['createdby'];
                                                                                echo '</td><td>'; ?>
                                                                                <?php if (in_array('46', $arrayuserlevel) || in_array('5', $arrayuserlevel) && $row['status'] != 8) { ?>
                                                                                    <form class="form-horizontal"
                                                                                        action="<?php echo base_url('SCORM/course_builder/Scorm_course_pages/del_file'); ?>"
                                                                                        method="POST"><?= csrf_field() ?>
                                                                                        <input type="hidden" name="page_id"
                                                                                            value="<?php echo $row['page_id'] ?>">
                                                                                        <input type="hidden" name="fileloc"
                                                                                            value="<?php echo $fileloc . '/' . $vtt['filename']; ?>">
                                                                                        <input type="hidden" name="file_name"
                                                                                            value="<?php echo $vtt['filename']; ?>">
                                                                                        <button type="submit" class="btn btn-outline-danger waves-effect btn-xs waves-light"
                                                                                            onclick="return confirm('<?php echo lang('Alert.Aler_003') ?>')"><span
                                                                                                class="mdi mdi-trash-can-outline"></span> Delete</button>
                                                                                    </form>
                                                                                <?php } ?>
                                                                            <?php echo '</td></tr>';
                                                                            }

                                                                            echo '</table>';
                                                                        } else {
                                                                            if ($row['status'] != 8) { ?>

                                                                                <div class="form-row">
                                                                                    <p style='color:red;'>Note : File name should be
                                                                                        En_video name , Ex
                                                                                        :
                                                                                        En_en_3.vtt</p>

                                                                                    <form class="form-horizontal2" enctype="multipart/form-data"
                                                                                        action=<?php echo base_url('SCORM/course_builder/scorm_course_pages/uploadvtt'); ?> method="post" id="uploadForm"><?= csrf_field() ?>
                                                                                        <div class="form-group col-md-12 mb-2">
                                                                                            <label>Select Language</label>
                                                                                            <select name="language" class="form-control">
                                                                                                <option value="1">English</option>
                                                                                                <option value="2">Spanish</option>
                                                                                                <option value="3">French</option>
                                                                                            </select>
                                                                                        </div>
                                                                                        <div class="form-group col-md-6 mb-2">
                                                                                            <input type="file" name="file" accept=".vtt,.VTT"
                                                                                                required />
                                                                                        </div>
                                                                                        <div class="form-group col-md-12 mb-2">
                                                                                            <input type="hidden" name="course_id"
                                                                                                value="<?php echo $course_id ?>">
                                                                                            <input type="hidden" name="page_id"
                                                                                                value="<?php echo $page_id ?>">
                                                                                            <button type="submit"
                                                                                                class="btn btn-outline-success waves-effect btn-sm waves-light form-control"
                                                                                                id="uploadButton">Upload VTT</button>
                                                                                        </div>
                                                                                        <?php if (isset($promovalidation)): ?>
                                                                                            <div class="form-group col-md-12">
                                                                                                <div class="alert alert-white" role="alert">
                                                                                                    <?= $promovalidation->listErrors() ?>
                                                                                                </div>
                                                                                            </div>
                                                                                        <?php endif; ?>
                                                                                    </form>
                                                                                </div>

                                                                        <?php }
                                                                        }
                                                                        ?>

                                                                    </div>
                                                                </div>
                                                            </div>

                                                        <?php } ?>
                                                    </div>
                                                <?php } ?>
                                                <?php $button_name = '';
                                                $button_name_reject = '';
                                                $status = 0;
                                                if (isset($row['status'])) {
                                                    if ($row['status'] == 6 && (in_array('46', $arrayuserlevel) || in_array('5', $arrayuserlevel))) { // Developer
                                                        $status = 7;
                                                        $button_name = 'Dev Completed';
                                                    } elseif ($row['status'] == 7 && (in_array('67', $arrayuserlevel) || in_array('46', $arrayuserlevel))) { // QA
                                                        $status = 8;
                                                        $button_name = 'QA Approved';
                                                        $status_reject = 6;
                                                        $button_name_reject = 'Reject QA Approved';
                                                    } elseif ($row['status'] == 8 && (in_array('4', $arrayuserlevel))) { // PM
                                                        $status = 6;
                                                        $button_name = 'Reopen';
                                                    }
                                                } ?>
                                                <div class="row">
                                                    <?php if ($status == 6 || $status == 7 || $status == 8) { ?>
                                                        <div class="col-6 col-md-6 col-lg-6 mg-t-2">
                                                            <form class="form-horizontal"
                                                                action="<?php echo base_url('SCORM/course_builder/scorm_course_pages/update_status') ?>"
                                                                method="POST"><?= csrf_field() ?>
                                                                <div class="form-group col-md-12 mb-1">
                                                                    <?php if (isset($coursevalidation)): ?>
                                                                        <div class=col-12 col-sm-4>
                                                                            <div class="alert alert-white" role="alert">
                                                                                <?= $coursevalidation->listErrors() ?>
                                                                            </div>
                                                                        </div>
                                                                    <?php endif; ?>
                                                                    <input type="hidden" name="status"
                                                                        value="<?php echo $status ?>">
                                                                    <input type="hidden" name="course_id"
                                                                        value="<?php echo $course_id ?>">
                                                                    <input type="hidden" name="page_id"
                                                                        value="<?php echo $page_id ?>">
                                                                    <button
                                                                        class="btn btn-outline-success waves-effect btn-sm waves-light mb-3"><?php echo $button_name ?></button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    <?php } ?>
                                                    <?php if ($status == 8) { ?>
                                                        <div class="col-6 col-md-6 col-lg-6 mg-t-2">
                                                            <form class="form-horizontal"
                                                                action="<?php echo base_url('SCORM/course_builder/scorm_course_pages/update_status') ?>"
                                                                method="POST"><?= csrf_field() ?>
                                                                <div class="form-group col-md-12 mb-1">
                                                                    <?php if (isset($coursevalidation)): ?>
                                                                        <div class=col-12 col-sm-4>
                                                                            <div class="alert alert-white" role="alert">
                                                                                <?= $coursevalidation->listErrors() ?>
                                                                            </div>
                                                                        </div>
                                                                    <?php endif; ?>
                                                                    <input type="hidden" name="status"
                                                                        value="<?php echo $status_reject ?>">
                                                                    <input type="hidden" name="course_id"
                                                                        value="<?php echo $course_id ?>">
                                                                    <input type="hidden" name="page_id"
                                                                        value="<?php echo $page_id ?>">
                                                                    <button
                                                                        class="btn btn-outline-danger waves-effect btn-sm waves-light mb-3"><?php echo $button_name_reject ?></button>
                                                                    <!-- <input type="hidden" name="status" value="1"> -->
                                                                </div>
                                                            </form>
                                                        </div>
                                                    <?php } ?>
                                                </div>


                                            </div>
                                            <div class="col-md-6">
                                                <table class="table dt-responsive wrap w-100">
                                                    <thead>
                                                        <tr>
                                                            <th>Audio Transcript</th>
                                                            <!-- <th>On Screen</th>
                                                        <th>Production Notes</th> -->
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <?php $j = 0;
                                                        foreach ($page_content as $eachpagesDetails) {
                                                            $j = $j + 1;
                                                        ?>
                                                            <tr>
                                                                <td><?php echo $eachpagesDetails['audio'] ?></td>
                                                                <!-- <td><?php echo $eachpagesDetails['on_screen_text'] ?></td>
                                                            <td><?php echo $eachpagesDetails['production_notes'] ?></td> -->
                                                            </tr>
                                                        <?php
                                                        }
                                                        ?>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <?php } elseif ($row['type'] == 5 || $row['type'] == 6) {
                                        //CYU Page
                                        if ((in_array('46', $arrayuserlevel) || in_array('5', $arrayuserlevel))) {
                                        ?>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <div class="x_panel">
                                                                <form class="form-horizontal"
                                                                    action="<?php echo base_url($editquestion) ?>" method="POST"><?= csrf_field() ?>
                                                                    <div class="col-md-12">
                                                                        <div class="row">
                                                                            <div class="col-md-10">
                                                                                <label>Question</label>
                                                                                <input type="text" class="form-control col-md-12"
                                                                                    name="question" placeholder="Question"
                                                                                    value="<?php echo isset($qrow['question']) ? htmlspecialchars($qrow['question']) : '' ?>" />
                                                                            </div>
                                                                            <div class="col-md-2">
                                                                                <?php if (isset($coursevalidation)): ?>
                                                                                    <div class=col-12 col-sm-4>
                                                                                        <div class="alert alert-danger" role="alert">
                                                                                            <?= $coursevalidation->listErrors() ?>
                                                                                        </div>
                                                                                    </div>
                                                                                <?php endif; ?><br />
                                                                                <input type="hidden" name="q_id"
                                                                                    value="<?php echo isset($qrow['q_id']) ? $qrow['q_id'] : ''; ?>">
                                                                                <input type="hidden" name="page_id"
                                                                                    value="<?php echo isset($qrow['page_id']) ? $qrow['page_id'] : ''; ?>">
                                                                                <input type="hidden" name="page_number"
                                                                                    value="<?php echo isset($qrow['page_number']) ? $qrow['page_number'] : ''; ?>">
                                                                                <input type="hidden" name="typeval"
                                                                                    value="<?php echo $typeval; ?>">
                                                                                <!-- <input type="hidden" name="returnUrl" value="1"> -->
                                                                                <button type="submit"
                                                                                    class="btn btn-outline-warning waves-effect btn-sm waves-light">
                                                                                    Update
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <?php $userlevel = session()->get('userlevel');
                                            $array = array_map('intval', str_split($userlevel)); ?>
                                            <!-- Button to add new entry -->
                                            <!-- <button type="button" id="addRowBtn" class="btn btn-sm btn-primary">+ Add New Option</button><br /> -->
                                            <div class="row">

                                                <div class="col-md-12">
                                                    <div class="card">
                                                        <div class="card-body">
                                                            <button type="submit" id="addRowBtn"
                                                                class="btn btn-outline-primary  rounded-pill waves-effect btn-sm waves-light mb-3 float-end"><span class="mdi mdi-plus-circle"></span>
                                                                Add New Option</button><br /><br />


                                                            <!-- <h5><?php //echo $row['question']; 
                                                                        ?></h5> -->

                                                            <table
                                                                style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif; font-size: 14px; background-color: #fff; border: 1px solid #ddd;">
                                                                <thead
                                                                    style="background-color: #378d4eff; text-align: left;color:white">
                                                                    <tr>
                                                                        <th
                                                                            style="width: 5%; padding: 10px; border-bottom: 2px solid #378d4eff;">
                                                                            #</th>
                                                                        <th
                                                                            style="padding: 10px; border-bottom: 2px solid #378d4eff;">
                                                                            Option</th>
                                                                        <th
                                                                            style="width: 10%; padding: 10px; border-bottom: 2px solid #378d4eff; text-align: center;">
                                                                            Answer</th>
                                                                        <th
                                                                            style="width: 15%; padding: 10px; border-bottom: 2px solid #378d4eff; text-align: center;">
                                                                            Delete</th>
                                                                    </tr>
                                                                </thead>

                                                                <tbody id="table-body">
                                                                    <?php
                                                                    $j = 0;
                                                                    if (!empty($getoptiondata)) {
                                                                        foreach ($getoptiondata as $eachoptiondata) {
                                                                            $j++;
                                                                            $answerIcon = $eachoptiondata['truefalse'] == 1 ?
                                                                                '<span class="mdi mdi-check-bold" style="color: green;"></span>' :
                                                                                '<span class="mdi mdi-close-thick" style="color: red;"></span>';
                                                                    ?>
                                                                            <tr style="border-bottom: 1px solid #eee; transition: background-color 0.2s;"
                                                                                onmouseover="this.style.backgroundColor='#f9f9f9';"
                                                                                onmouseout="this.style.backgroundColor='white';">

                                                                                <td style="padding: 10px; text-align: center;">
                                                                                    <?php echo $j; ?>
                                                                                </td>

                                                                                <td contenteditable="true"
                                                                                    onBlur="updateDate(this,'values','<?php echo $eachoptiondata['o_id'] ?>')"
                                                                                    style="padding: 10px; border-left: 1px solid #eee; border-right: 1px solid #eee; cursor: text;">
                                                                                    <?php echo $eachoptiondata['values'] ?>
                                                                                </td>

                                                                                <td style="padding: 10px; text-align: center;">
                                                                                    <?php
                                                                                    if ($pagerow['type'] == '5') {
                                                                                        $type = $pagerow['type'];
                                                                                        $questionId = $eachoptiondata['question_id'];
                                                                                        $truefalse = $eachoptiondata['truefalse'];
                                                                                        $optionId = $eachoptiondata['o_id'];

                                                                                        $btnColor = $truefalse == 1 ? 'btn btn-outline-success waves-effect btn-xs waves-light mb-3' : 'btn btn-outline-danger waves-effect btn-xs waves-light mb-3';
                                                                                        $btnText = $truefalse == 1 ? 'Correct' : 'Wrong';
                                                                                    ?>
                                                                                        <button type="button"
                                                                                            onclick="toggleTrueFalse(this, '<?php echo $optionId; ?>')"
                                                                                            class="<?php echo $btnColor; ?>">
                                                                                            <?php echo $btnText; ?>
                                                                                        </button>
                                                                                        <?php } else {
                                                                                        if ($eachoptiondata['truefalse'] == 1) { ?>
                                                                                            <button type="button"
                                                                                                onclick="updateDate('2','truefalse','<?php echo $eachoptiondata['o_id'] ?>')"
                                                                                                class="btn btn-outline-success waves-effect btn-xs waves-light mb-3">
                                                                                                Correct
                                                                                            </button>
                                                                                        <?php } else { ?>
                                                                                            <button type="button"
                                                                                                onclick="updateDate('1','truefalse','<?php echo $eachoptiondata['o_id'] ?>')"
                                                                                                class="btn btn-outline-danger waves-effect btn-xs waves-light mb-3">
                                                                                                Wrong
                                                                                            </button>
                                                                                    <?php }
                                                                                    } ?>
                                                                                </td>

                                                                                <td style="padding: 10px; text-align: center;">
                                                                                    <button type="button"
                                                                                        onclick="updateDate('0','status','<?php echo $eachoptiondata['o_id'] ?>')"
                                                                                        title="Delete Option" class="btn btn-outline-danger waves-effect btn-xs waves-light mb-3">
                                                                                        <span class="mdi mdi-trash-can-outline"></span> Delete
                                                                                    </button>
                                                                                </td>
                                                                            </tr>
                                                                    <?php }
                                                                    } ?>
                                                                </tbody>
                                                            </table>




                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="row">
                                                <ul class="nav nav-pills nav-fill navtab-bg">
                                                    <li class="nav-item">
                                                        <a href="#Settings" data-bs-toggle="tab" aria-expanded="true" class="nav-link <?php if ($tab == 1)
                                                                                                                                            echo "active"; ?>">
                                                            Settings
                                                        </a>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a href="#Template" data-bs-toggle="tab" aria-expanded="false" class="nav-link <?php if ($tab == 2)
                                                                                                                                            echo "active"; ?>">
                                                            Template
                                                        </a>
                                                    </li>
                                                </ul>
                                                <?php // print_r($tab); 
                                                ?>
                                                <div class="tab-content">
                                                    <div class="tab-pane <?php if ($tab == 1)
                                                                                echo "show active"; ?>" id="Settings">

                                                        <div class="col-md-12">
                                                            <div class="card">
                                                                <div class="card-body">
                                                                    <div class="x_panel">
                                                                        <form class="form-horizontal"
                                                                            action="<?php echo base_url('Assessment/trainings/edit_attempts_question') ?>"
                                                                            method="POST"><?= csrf_field() ?>
                                                                            <div class="col-md-12">
                                                                                <?php if ($pagerow['type'] == 5 || $pagerow['type'] == 6) { ?>
                                                                                    <div class="row">
                                                                                        <div class="col-md-12 mb-2">
                                                                                            <label>Correct feedback</label>
                                                                                            <input type="text"
                                                                                                class="form-control col-md-12"
                                                                                                name="correct" placeholder=""
                                                                                                value="<?php echo isset($qrow['correct']) ? htmlspecialchars($qrow['correct']) : '' ?>" />
                                                                                        </div>
                                                                                        <div class="col-md-12 mb-2">
                                                                                            <label>Incorrect feedback 1</label><br>
                                                                                            <input type="text"
                                                                                                class="form-control col-md-12"
                                                                                                name="incorrect2" placeholder=""
                                                                                                value="<?php echo isset($qrow['incorrect2']) ? htmlspecialchars($qrow['incorrect2']) : '' ?>" />
                                                                                        </div>
                                                                                        <div class="col-md-12 mb-2">
                                                                                            <label>Incorrect feedback 2</label>
                                                                                            <input type="text"
                                                                                                class="form-control col-md-12"
                                                                                                name="incorrect" placeholder=""
                                                                                                value="<?php echo isset($qrow['incorrect']) ? htmlspecialchars($qrow['incorrect']) : '' ?>" />
                                                                                        </div>

                                                                                        <div class="col-md-12 mb-2">
                                                                                            <label>Attempts</label>
                                                                                            <select name="noAttempts"
                                                                                                class="form-control">
                                                                                                <option value="2" selected>2</option>
                                                                                                <!-- <option value="1">1</option> -->
                                                                                            </select>
                                                                                        </div>

                                                                                    </div>
                                                                                <?php } ?>
                                                                                <?php if ($type == 4) { ?>
                                                                                    <div class="row">
                                                                                        <div class="col-md-4">
                                                                                            <label>Category</label>
                                                                                            <select name="category"
                                                                                                class="form-control col-md-12">
                                                                                                <?php if (!empty($allcategories)) {
                                                                                                    foreach ($allcategories as $eachcategories) {
                                                                                                        // print_r($eachcategories);
                                                                                                        if ($row['category'] == $eachcategories['sc_mcid']) { ?>
                                                                                                            <option selected='selected'
                                                                                                                value="<?php echo $eachcategories['sc_mcid'] ?>">
                                                                                                                <?php echo $eachcategories['description'] ?>
                                                                                                            </option>
                                                                                                        <?php } else { ?>
                                                                                                            <option
                                                                                                                value="<?php echo $eachcategories['sc_mcid'] ?>">
                                                                                                                <?php echo $eachcategories['description'] ?>
                                                                                                            </option>
                                                                                                <?php }
                                                                                                    }
                                                                                                }
                                                                                                ?>
                                                                                            </select>
                                                                                        </div>
                                                                                        <div class="col-md-4">
                                                                                            <label>Score</label>
                                                                                            <input type="text"
                                                                                                class="form-control col-md-12"
                                                                                                name="score" placeholder="Score"
                                                                                                value="<?php echo $row['score'] ?>" />
                                                                                        </div>

                                                                                        <div class="col-md-4">
                                                                                            <label>Type</label>
                                                                                            <select name="quiz_type"
                                                                                                class="form-control col-md-12">
                                                                                                <?php if (!empty($AssessmentQuestionType)) {
                                                                                                    foreach ($AssessmentQuestionType as $quiz_type) {
                                                                                                        if ($row['quiz_type'] == $quiz_type['id_d']) { ?>
                                                                                                            <option selected='selected'
                                                                                                                value="<?php echo $quiz_type['id_d'] ?>">
                                                                                                                <?php echo $quiz_type['name'] ?>
                                                                                                            </option>
                                                                                                        <?php } else { ?>
                                                                                                            <option
                                                                                                                value="<?php echo $quiz_type['id_d'] ?>">
                                                                                                                <?php echo $quiz_type['name'] ?>
                                                                                                            </option>
                                                                                                <?php }
                                                                                                    }
                                                                                                }
                                                                                                ?>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div><br />
                                                                                <?php } ?>

                                                                                <div class="row">

                                                                                    <div class="col-md-12">
                                                                                        <?php if (isset($coursevalidation)): ?>
                                                                                            <div class=col-12 col-sm-4>
                                                                                                <div class="alert alert-danger"
                                                                                                    role="alert">
                                                                                                    <?= $coursevalidation->listErrors() ?>
                                                                                                </div>
                                                                                            </div>
                                                                                        <?php endif; ?>
                                                                                        <input type="hidden" name="q_id"
                                                                                            value="<?php echo isset($qrow['q_id']) ? $qrow['q_id'] : ''; ?>">
                                                                                        <input type="hidden" name="typeval"
                                                                                            value="<?php echo $typeval; ?>">
                                                                                        <input type="hidden" name="typeval"
                                                                                            value="<?php echo $typeval; ?>">
                                                                                        <input type="hidden" name="page_number"
                                                                                            value="<?php echo $page_number; ?>">
                                                                                        <input type="hidden" name="returnUrl"
                                                                                            value="1">
                                                                                        <input type="hidden" name="tab" value="1">
                                                                                        <button type="submit"
                                                                                            class="btn btn-outline-warning waves-effect btn-sm waves-light mb-3">
                                                                                            Update CYU Settings
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane <?php if ($tab == 2)
                                                                                echo "show active"; ?>" id="Template">
                                                        <div class="col-md-12">
                                                            <div class="card">
                                                                <div class="card-body">
                                                                    ( Note: Respective Default Template will be display if you are
                                                                    not filled any fields)<br />
                                                                    <?php //$getAssessmentSets = '';

                                                                    foreach ($assessment_scqmcq_sets as $x => $sets) {
                                                                        if (!empty($AssessmentSettings[$x])) {

                                                                            $item = $AssessmentSettings[$x][0]['value'];
                                                                            $s_id = $AssessmentSettings[$x][0]['s_id'];

                                                                    ?>

                                                                            <form
                                                                                action="<?php echo base_url('Assessment/trainings/setting_data_update') ?>"
                                                                                method="POST"><?= csrf_field() ?>
                                                                                <input type="hidden" name="quiz_settings_type"
                                                                                    value="<?php echo $x ?>">
                                                                                <input type="hidden" name="add_or_update" value="2">
                                                                                <input type="hidden" name="s_id"
                                                                                    value="<?php echo $s_id; ?>">
                                                                                <input type="hidden" name="scourse_id"
                                                                                    value="<?php echo $scourse_id; ?>">
                                                                                <input type="hidden" name="page_id"
                                                                                    value="<?php echo $pagerow['page_id']; ?>">
                                                                                <input type="hidden" name="tab" value="2">
                                                                                <input type="hidden" name="returnUrl" value="2">
                                                                                <div class="row">
                                                                                    <?php if ($x == '59') { ?>
                                                                                        <label><b>Default SCQ:</b>
                                                                                            <?php echo $assessment_scqmcq_sets[$x] ?></label><br>
                                                                                    <?php } elseif ($x == '60') { ?>
                                                                                        <label><b>Default MCQ:</b>
                                                                                            <?php echo $assessment_scqmcq_sets[$x] ?></label><br>
                                                                                    <?php } else { ?>
                                                                                        <label><b>Default :</b>
                                                                                            <?php echo $assessment_scqmcq_sets[$x] ?></label><br>
                                                                                    <?php } ?>
                                                                                    <div class="col-lg-10">
                                                                                        <input class="form-control" name="valid"
                                                                                            type="hidden" />
                                                                                        <input class="form-control" name="value"
                                                                                            type="input"
                                                                                            value="<?php echo isset($item) ? $item : $assessment_scqmcq_sets[$x]; ?>" />
                                                                                    </div>
                                                                                    <div class="col-lg-2">
                                                                                        <button type="submit"
                                                                                            class="btn btn-outline-warning btn-xs rounded-pill waves-effect waves-light mt-2">
                                                                                            Update</button>
                                                                                    </div>
                                                                                </div><br />
                                                                            </form>

                                                                        <?php
                                                                        } else {
                                                                        ?>
                                                                            <form
                                                                                action="<?php echo base_url('Assessment/trainings/setting_data_update') ?>"
                                                                                method="POST"><?= csrf_field() ?>
                                                                                <input type="hidden" name="quiz_settings_type"
                                                                                    value=" <?php echo $x ?>">
                                                                                <input type="hidden" name="add_or_update" value="1">
                                                                                <input type="hidden" name="s_id" value="0">
                                                                                <input type="hidden" name="quiz_settings_id"
                                                                                    value="<?php echo isset($getAssessmentSettings[0]['s_id']) ? $getAssessmentSettings[0]['s_id'] : ''; ?>">
                                                                                <input type="hidden" name="scourse_id"
                                                                                    value="<?php echo isset($scourse_id) ? $scourse_id : ''; ?>">
                                                                                <input type="hidden" name="page_id"
                                                                                    value="<?php echo $pagerow['page_id']; ?>">
                                                                                <input type="hidden" name="tab" value="2">
                                                                                <input type="hidden" name="returnUrl" value="2">
                                                                                <div class="row">
                                                                                    <div class="col-lg-10">
                                                                                        <?php if ($x == '59') { ?>
                                                                                            <label><b>Default SCQ:</b>
                                                                                                <?php echo $assessment_scqmcq_sets[$x] ?></label><br>
                                                                                        <?php } elseif ($x == '60') { ?>
                                                                                            <label><b>Default MCQ:</b>
                                                                                                <?php echo $assessment_scqmcq_sets[$x] ?></label><br>
                                                                                        <?php } else { ?>
                                                                                            <label><b>Default :</b>
                                                                                                <?php echo $assessment_scqmcq_sets[$x] ?></label><br>
                                                                                        <?php } ?>
                                                                                        <input class="form-control" name="valid"
                                                                                            type="hidden" />
                                                                                        <input name="value" class="form-control" value=""
                                                                                            required />
                                                                                    </div>
                                                                                    <div class="col-lg-2">
                                                                                        <button type="submit"
                                                                                            class="btn btn-outline-primary btn-xs rounded-pill waves-effect waves-light mt-2">
                                                                                            Add</button>
                                                                                    </div>
                                                                                </div><br />
                                                                            </form>
                                                                    <?php
                                                                        }
                                                                    }
                                                                    ?>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <?php //echo $question_id 
                                                ?>
                                            </div>
                                        <?php } ?>
                                        <div class="question_bg" style="min-height: 600px" ;>
                                            <div class="question_base">
                                                <?php echo $question['question']; ?>
                                            </div>
                                            <div class="option_container">
                                                <!-- <i>Select the correct answer, and then click <strong>Submit.</strong></i> -->
                                                <i><?php echo $kyuselectmcqdescrip; ?></i>
                                                <form id="radioForm"><?= csrf_field() ?>
                                                    <?php if (isset($question_options)) {
                                                        $count = 1;
                                                        foreach ($question_options as $options) { ?>
                                                            <div class="form-check">

                                                                <?php $correct = $options['truefalse'];
                                                                if ($correct == 1) {
                                                                ?>
                                                                    <input class="form-check-input" type="radio" name="exampleRadios"
                                                                        id="exampleRadios<?php echo $count; ?>" value="feedback_correct">

                                                                    <label class="form-check-label options_correct" id="correct" value="1"
                                                                        onchange="toggleDiv()" for="exampleRadios<?php echo $count; ?>">

                                                                    <?php
                                                                } else {
                                                                    ?>
                                                                        <input class="form-check-input" type="radio" name="exampleRadios"
                                                                            id="exampleRadios<?php echo $count; ?>" value="feedback_wrong">
                                                                        <label class="form-check-label options" id="incorrect" value="0"
                                                                            onchange="toggleDiv()" for="exampleRadios<?php echo $count; ?>">
                                                                        <?php
                                                                    }
                                                                        ?>

                                                                        <?php echo $options['values']; ?>
                                                                        </label>
                                                            </div>
                                                            <?php $count++; ?>
                                                            <?php // echo $options['score']; 
                                                            ?>
                                                    <?php }
                                                    } ?>
                                                    <br>
                                                    <button
                                                        class="btn btn-outline-primary waves-effect btn-sm waves-light"><?php echo $kyusubmit; ?></button></br></br>
                                                </form>
                                                <div id="correct_feedback"
                                                    style="color :white;background:#15a159;padding:5px;border-radius: 5px;">
                                                    <b>Correct Feedback :</b> <?php echo $question['correct']; ?>
                                                </div><br />
                                                <div id="incorrect_feedback"
                                                    style="color :white;background:Tomato;padding:5px;border-radius: 5px;"><b>In
                                                        correct : </b><?php echo $question['incorrect']; ?></div>
                                            </div>
                                            <?php // echo $question['noAttempts']; 
                                            ?>
                                        </div>
                                    <?php } elseif ($row['type'] == 6) {
                                        //CYU Page
                                    ?>
                                        <div class="question_bg" style="min-height: 600px">
                                            <div class="question_base">
                                                <?php echo $question['question']; ?>
                                            </div>
                                            <div class="option_container">
                                                <i><?php echo $kyuselectmcqdescrip; ?></i>
                                                <form id="checkboxForm">
                                                    <?php if (isset($question_options)) {
                                                        $count = 1;
                                                        $totalcorrect = 0;
                                                        foreach ($question_options as $options) { ?>
                                                            <div class="form-check">
                                                                <?php
                                                                $correct = isset($options['truefalse']) ? $options['truefalse'] : 0;
                                                                if ($correct == 1) {
                                                                    $totalcorrect++;
                                                                ?>
                                                                    <input class="form-check-input" type="checkbox" name="checkanswer"
                                                                        id="exampleCheckbox<?php echo $count; ?>" value="feedback_correct">

                                                                    <label class="form-check-label options"
                                                                        for="exampleCheckbox<?php echo $count; ?>">

                                                                    <?php
                                                                } else {
                                                                    ?>
                                                                        <input class="form-check-input" type="checkbox" name="checkanswer"
                                                                            id="exampleCheckbox<?php echo $count; ?>"
                                                                            value="feedback_wrong">
                                                                        <label class="form-check-label options_correct"
                                                                            for="exampleCheckbox<?php echo $count; ?>">
                                                                        <?php
                                                                    }
                                                                        ?>
                                                                        <?php echo $options['values']; ?>
                                                                        </label>
                                                            </div>
                                                            <?php $count++; ?>

                                                        <?php } ?>
                                                        <input type="hidden" id="totalcorrect" name="totalcorrect2"
                                                            value="<?php echo $totalcorrect; ?>">
                                                    <?php } ?>
                                                    <br>
                                                    <button
                                                        class="btn btn-outline-primary waves-effect btn-sm waves-light"><?php echo $kyusubmit; ?></button><br><br>
                                                </form>
                                                <div id="correct_feedback"
                                                    style="color :white;background:#15a159 ;padding:5px;border-radius: 5px;">
                                                    <b>Correct Feedback :</b> <?php echo $question['correct']; ?>
                                                </div><br />
                                                <div id="incorrect_feedback"
                                                    style="color :white;background:Tomato;padding:5px;border-radius: 5px;"><b>In
                                                        correct : </b><?php echo $question['incorrect']; ?></div>
                                            </div>
                                        </div>

                                    <?php } elseif ($pagetype[0]['type'] == 4) { ?>

                                        <div class="col-md-12 col-sm-12 mb-2">
                                            <div class="row">
                                                <div class="col-md-2 col-sm-2 form-group pull-right">
                                                    <!-- <form class="form-horizontal"
                                                        action="<?php echo base_url('Assessment/trainings/add_new_question') ?>"
                                                        method="POST"><?= csrf_field() ?>
                                                        <input type="hidden" name="type"
                                                            value="<?php echo $pagetype[0]['type'] ?>">
                                                        <input type="hidden" name="scourse_id" value="<?php echo $course_id ?>">
                                                        <input type="hidden" name="page_id" value="<?php echo $page_id ?>">

                                                        <input type="hidden" name="page_name" value="<?php echo $page_name ?>">
                                                        <div class="form-group">
                                                            <button type="submit"
                                                                class="btn btn-outline-success  btn-xs rounded-pill waves-effect waves-light">Add
                                                                New
                                                                Question</button>
                                                        </div>
                                                    </form> -->
                                                    <button type="button" class="btn btn-outline-success  btn-xs rounded-pill waves-effect waves-light" data-bs-toggle="modal" data-bs-target="#signup-modal">Add New Question</button>

                                                </div>

                                                <div id="signup-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">

                                                            <div class="modal-body">

                                                                <form class="px-3" action="<?php echo base_url('Assessment/trainings/addQuestions') ?>" method="POST" id="submitForm"><?= csrf_field() ?>
                                                                    <div class="mb-3">
                                                                        <label for="username" class="form-label">Question</label>
                                                                        <textarea class="form-control col-md-12" name="question" placeholder="Question" required></textarea>
                                                                    </div>

                                                                    <div class="mb-3">
                                                                        <label for="emailaddress" class="form-label">Type of Question</label>
                                                                        <select class="form-select" name="quiz_type">
                                                                            <option value="112">Single Choice</option>
                                                                            <option value="115">Multiple Choice</option>

                                                                        </select>
                                                                    </div>
                                                                    <input type="hidden" name="scourse_id" value="<?php echo $scourse_id; ?>">
                                                                    <input type="hidden" name="page_id" value="<?php echo $page_id; ?>">
                                                                    <input type="hidden" name="type" value="<?php echo $pagetype[0]['type'] ?>">
                                                                    <input type="hidden" name="typeval" value="8">
                                                                    <input type="hidden" name="returnUrl" value="1">

                                                                    <div class="mb-3 text-center">
                                                                        <button class="btn btn-outline-primary waves-effect btn-xs waves-light" type="submit">Add New Question</button>
                                                                    </div>

                                                                </form>

                                                            </div>
                                                        </div><!-- /.modal-content -->
                                                    </div><!-- /.modal-dialog -->
                                                </div><!-- /.modal -->

                                                <div class="col-md-2 col-sm-2 form-group pull-right">

                                                    <form class="form-horizontal"
                                                        action="<?php echo base_url('Assessment/trainings/assessment_settings') ?>"
                                                        method="POST"><?= csrf_field() ?>
                                                        <input type="hidden" name="type"
                                                            value="<?php echo $pagetype[0]['type'] ?>">
                                                        <input type="hidden" name="scourse_id"
                                                            value="<?php echo $scourse_id; ?>">
                                                        <input type="hidden" name="page_id"
                                                            value="<?php echo $pagerow['page_id'] ?>">
                                                        <input type="hidden" name="course_name"
                                                            value="<?php echo $pagerow['course_name']; ?>">
                                                        <input type="hidden" name="page_name"
                                                            value="<?php echo $pagerow['page_name']; ?>">
                                                        <div class="form-group">
                                                            <button type="submit"
                                                                class="btn btn-outline-warning  btn-xs rounded-pill waves-effect waves-light">
                                                                Settings</button>
                                                        </div>
                                                    </form>
                                                    </a>
                                                </div>

                                                <div class="col-md-2 col-sm-2 form-group pull-right">
                                                    <form class="form-horizontal"
                                                        action="<?php echo base_url('Assessment/trainings/export_questions_excel') ?>"
                                                        method="POST"><?= csrf_field() ?>
                                                        <input type="hidden" name="type"
                                                            value="<?php echo $pagetype[0]['type'] ?>">
                                                        <input type="hidden" name="scourse_id"
                                                            value="<?php echo $scourse_id; ?>">
                                                        <input type="hidden" name="page_id"
                                                            value="<?php echo $pagerow['page_id'] ?>">
                                                        <input type="hidden" name="course_name"
                                                            value="<?php echo $pagerow['course_name']; ?>">
                                                        <div class="form-group">
                                                            <button type="submit"
                                                                class="btn btn-outline-danger  btn-xs rounded-pill waves-effect waves-light">Export
                                                                Questions</button>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="col-md-2 col-sm-2 form-group pull-right">
                                                    <form class="form-horizontal"
                                                        action="<?php echo base_url('Assessment/trainings/importQuestionsOptions_view') ?>"
                                                        method="POST"><?= csrf_field() ?>
                                                        <input type="hidden" name="type"
                                                            value="<?php echo $pagetype[0]['type'] ?>">
                                                        <input type="hidden" name="scourse_id"
                                                            value="<?php echo $scourse_id; ?>">
                                                        <input type="hidden" name="page_id"
                                                            value="<?php echo $pagerow['page_id'] ?>">
                                                        <input type="hidden" name="course_name"
                                                            value="<?php echo $pagerow['course_name']; ?>">
                                                        <div class="form-group">
                                                            <button type="submit"
                                                                class="btn btn-outline-info  btn-xs rounded-pill waves-effect waves-light">Import
                                                                Questions</button>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="col-md-2 col-sm-2 form-group pull-right">
                                                    <form class="form-horizontal"
                                                        action="<?php echo base_url('Assessment/trainings/review_quiz') ?>"
                                                        method="POST"><?= csrf_field() ?>
                                                        <input type="hidden" name="scourse_id"
                                                            value="<?php echo $scourse_id; ?>">
                                                        <input type="hidden" name="page_id"
                                                            value="<?php echo $pagerow['page_id'] ?>">
                                                        <input type="hidden" name="type" value="<?php echo $pagerow['type'] ?>">
                                                        <div class="form-group">
                                                            <button type="submit"
                                                                class="btn btn-outline-primary  btn-xs rounded-pill waves-effect waves-light">Review
                                                                Quiz</button>
                                                        </div>
                                                    </form>
                                                </div>


                                            </div>
                                        </div>

                                        <style>
                                            .question-cell {
                                                max-width: 500px;
                                                padding-left: 100px;
                                                /* Adjust as needed */
                                                overflow: hidden;
                                                /* text-overflow: ellipsis; */
                                                white-space: nowrap;

                                                vertical-align: top;
                                            }
                                        </style>
                                        <div class="row">
                                            <?php $userlevel = session()->get('userlevel');
                                            $array = array_map('intval', str_split($userlevel)); ?>
                                            <div class="card">
                                                <div class="card-body">
                                                    <p class="text-muted font-13 mb-2"></p>
                                                    <table id="alternative-page-datatable"
                                                        class="table dt-responsive nowrap w-100">
                                                        <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>Question</th>
                                                                <th width="5%">Edit</th>
                                                                <?php if ($pagetype[0]['type'] == '4') { ?>
                                                                    <th  width="5%">Copy</th>
                                                                <?php } ?>
                                                                <th width="5%">Delete</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <?php
                                                            $j = 0;
                                                            // print_r($getQuestiondata);
                                                            if (isset(($getQuestiondata)) && !empty($getQuestiondata)) {
                                                                foreach ($getQuestiondata as $eachQuestion) {
                                                                    // print_r($eachQuestion);getQuestiondata
                                                                    $j = $j + 1;

                                                            ?>
                                                                    <tr>
                                                                        <td width="5%"><?php echo $j; ?></td>
                                                                        <!-- <td title="<?php echo $eachQuestion['question']; ?>">
                                <?php echo strlen($eachQuestion['question']) > 100 ? substr($eachQuestion['question'], 0, 50) . '...' : $eachQuestion['question']; ?>
                            </td> -->

                                                                        <td class="question-cell">
                                                                            <?php echo $eachQuestion['question']; ?>
                                                                        </td>
                                                                        <!-- <td></td> -->
                                                                        <!-- <td><?php echo $eachQuestion['categoryname']; ?></td> -->
                                                                        <!-- <td></td> -->
                                                                        <!-- <td>
                                <form class="form-horizontal" action="<?php echo base_url('Assessment/trainings/edit_quiz_quetion_view') ?>" method="POST"><?= csrf_field() ?>
                                    <input type="hidden" name="type" value="<?php echo $pagetype[0]['type']; ?>">
                                    <input type="hidden" name="question_id" value="<?php echo $eachQuestion['q_id']; ?>">
                                    <button type="submit" class="btn btn-sm widget-icon btn-warning"><span class="icon-pencil"></span></button>
                                </form>
                            </td> -->
                                                                        <td >
                                                                            <form class="form-horizontal"
                                                                                action="<?php echo base_url('Assessment/trainings/add_quiz_option_view') ?>"
                                                                                method="POST"><?= csrf_field() ?>
                                                                                <input type="hidden" name="type"
                                                                                    value="<?php echo $pagetype[0]['type']; ?>">
                                                                                <input type="hidden" name="scourse_id"
                                                                                    value="<?php echo $scourse_id; ?>">
                                                                                <input type="hidden" name="page_id"
                                                                                    value="<?php echo $eachQuestion['page_id']; ?>">
                                                                                <input type="hidden" name="question_id"
                                                                                    value="<?php echo $eachQuestion['q_id']; ?>">
                                                                                <button class="btn btn-outline-warning waves-effect btn-xs waves-light"><span
                                                                                        class="mdi mdi-square-edit-outline"></span></button>
                                                                            </form>
                                                                        </td>
                                                                        <?php if ($pagetype[0]['type'] == '4') { ?>
                                                                            <td >
                                                                                <form class="form-horizontal"
                                                                                    action="<?php echo base_url($copyQuestion_link) ?>"
                                                                                    method="POST"><?= csrf_field() ?>
                                                                                    <input type="hidden" name="scourse_id"
                                                                                        value="<?php echo $scourse_id; ?>">
                                                                                    <input type="hidden" name="question_id"
                                                                                        value="<?php echo $eachQuestion['q_id']; ?>">
                                                                                    <button type="submit" class="btn btn-outline-primary waves-effect btn-xs waves-light"><span
                                                                                            class="mdi mdi-content-copy"></span></button>
                                                                                </form>
                                                                            </td>
                                                                        <?php } ?>
                                                                        <td>
                                                                            <form class="form-horizontal"
                                                                                action="<?php echo base_url($quizdelete_link) ?>"
                                                                                method="POST"><?= csrf_field() ?>
                                                                                <input type="hidden" name="question_id"
                                                                                    value="<?php echo $eachQuestion['q_id']; ?>">
                                                                                <button type="submit"
                                                                                    onclick="return confirm('<?php echo lang('Alert.Aler_002') ?>')"
                                                                                    class="btn btn-outline-danger waves-effect btn-xs waves-light"><span
                                                                                        class="mdi mdi-trash-can-outline"></span></button>
                                                                            </form>
                                                                        </td>

                                                                    </tr>
                                                            <?php
                                                                }
                                                            } ?>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>

                                    <?php } ?>
                                </div>
                            </div>

                            <?php if ($row['type'] == 1) { ?>
                                <div class="row">
                                    <div class="col-12 col-md-12 col-lg-12 mg-t-2">
                                        <div class="card">
                                            <div class="card-body">
                                                <?php
                                                $folderloc = $baseloc . 'assets/assets/uploads/SCORM_course_document/' . $course_id . '/' . $row['createdon'] . 'assets/Articulate/' . $row['page_id'];
                                                if (!empty($pageArticulate)) {
                                                    echo '<table class="table  table-sm">';
                                                    echo '<tr><th>Articulate Folder</th><th>Lang</th><th>On</th><th>By</th><th>Del</th></tr>';
                                                    foreach ($pageArticulate as $Articulate) {

                                                        echo '<tr><td>';
                                                        echo $Articulate['folder'];
                                                        echo '</td><td>';
                                                        if ($Articulate['language'] == 1) {
                                                            echo 'English';
                                                        } elseif ($Articulate['language'] == 2) {
                                                            echo 'Spanish';
                                                        } elseif ($Articulate['language'] == 3) {
                                                            echo 'French';
                                                        }
                                                        echo '</td><td>';
                                                        echo date('d-m-Y h:i:s', $Articulate['createdon']);

                                                        echo '</td><td>';
                                                        echo $Articulate['createdby'];
                                                        echo '</td><td>'; ?>
                                                        <?php if (in_array('46', $arrayuserlevel) || in_array('5', $arrayuserlevel) && $row['status'] != 8) { ?>
                                                            <form class="form-horizontal"
                                                                action="<?php echo base_url('SCORM/course_builder/Scorm_course_pages/del_folder'); ?>"
                                                                method="POST"><?= csrf_field() ?>
                                                                <input type="hidden" name="page_id" value="<?php echo $row['page_id'] ?>">
                                                                <input type="hidden" name="folderloc" value="<?php echo $folderloc; ?>">
                                                                <input type="hidden" name="folder_name"
                                                                    value="<?php echo $Articulate['folder']; ?>">
                                                                <button type="submit" class="btn btn-outline-danger waves-effect btn-xs waves-light"
                                                                    onclick="return confirm('<?php echo lang('Alert.Aler_003') ?>')"><span
                                                                        class="mdi mdi-trash-can-outline"></span> Delete</button>
                                                            </form>
                                                        <?php } ?>
                                                <?php echo '</td></tr>';
                                                    }
                                                    echo '</table>';
                                                } else {
                                                    echo 'No Files';
                                                }
                                                ?>
                                            </div>
                                        </div>
                                    </div>
                                    <?php if (empty($pageArticulate)) { ?>
                                        <?php if ($row['status'] != 8) { ?>
                                            <div class="col-12 col-md-12 col-lg-12 mg-t-10">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <div class="form-row">
                                                            <form class="form-horizontal1" id="uploadzipfile"
                                                                enctype="multipart/form-data"><?= csrf_field() ?>
                                                                <div class="form-group col-md-12 mb-2">
                                                                    <label>Select Language</label>
                                                                    <select name="language" class="form-control">
                                                                        <option value="1">English</option>
                                                                        <option value="2">Spanish</option>
                                                                        <option value="3">French</option>
                                                                    </select>
                                                                </div>
                                                                <div class="form-group col-md-12 mb-2">
                                                                    <input type="file" name="zip_file" accept=".ZIP,.zip" required />
                                                                </div>
                                                                <div class="form-group col-md-12 mb-2">
                                                                    <input type="hidden" name="course_id"
                                                                        value="<?php echo $course_id ?>">
                                                                    <input type="hidden" name="page_id" value="<?php echo $page_id ?>">
                                                                    <button type="submit"
                                                                        class="btn btn-outline-danger waves-effect btn-sm waves-light form-control"
                                                                        id="uploadButton">Upload Package</button>
                                                                </div>
                                                            </form>
                                                            <div class="progress" style="display:none;">
                                                                <div class="progress-bar" role="progressbar" style="width: 0%;"
                                                                    aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        <?php } ?>
                                    <?php } ?>
                                </div>
                            <?php } elseif ($row['type'] == 3) { ?>
                                <?php
                                $folderloc = $baseloc . 'assets/assets/uploads/SCORM_course_document/' . $course_id . '/' . $row['createdon'] . '/assets/html';
                                ?>

                                <div class="row">
                                    <div class="col-12 col-md-12 col-lg-12">
                                        <div class="card">
                                            <div class="card-body">
                                                <?php $currentFolder = $folderloc . '/' . $row['page_id']; ?>

                                                <?php if (is_dir($currentFolder)) { ?>
                                                    <!-- Folder exists: show table + delete option -->
                                                    <table class="table table-sm">
                                                        <tr>
                                                            <th>Folder</th>
                                                            <th>Lang</th>
                                                            <th>On</th>
                                                            <th>By</th>
                                                            <th>Del</th>
                                                        </tr>

                                                        <?php foreach ($pageArticulate as $Articulate) { ?>
                                                            <tr>
                                                                <td><?= $Articulate['page_id'] ?></td>
                                                                <td>
                                                                    <?php
                                                                    if ($Articulate['language'] == 1)
                                                                        echo 'English';
                                                                    elseif ($Articulate['language'] == 2)
                                                                        echo 'Spanish';
                                                                    elseif ($Articulate['language'] == 3)
                                                                        echo 'French';
                                                                    ?>
                                                                </td>
                                                                <td><?= date('d-m-Y h:i:s', $Articulate['createdon']) ?></td>
                                                                <td><?= $Articulate['createdby'] ?></td>
                                                                <td>
                                                                    <?php if (in_array('46', $arrayuserlevel) || in_array('5', $arrayuserlevel) && $Articulate['status'] != 8) { ?>
                                                                        <form method="POST"
                                                                            action="<?= base_url('SCORM/course_builder/Scorm_course_pages/del_folder'); ?>">
                                                                            <input type="hidden" name="page_id"
                                                                                value="<?= $Articulate['page_id'] ?>">
                                                                            <input type="hidden" name="folderloc"
                                                                                value="<?= $currentFolder ?>">
                                                                            <input type="hidden" name="folder_name"
                                                                                value="<?= $Articulate['page_id'] ?>">
                                                                            <button type="submit" class="btn btn-outline-primary waves-effect btn-xs waves-light"
                                                                                onclick="return confirm('<?php echo lang('Alert.Aler_003') ?>')">
                                                                                <span class="mdi mdi-trash-can-outline"></span>
                                                                            </button>
                                                                        </form>
                                                                    <?php } ?>
                                                                </td>
                                                            </tr>
                                                        <?php } ?>
                                                    </table>

                                                <?php } else { ?>
                                                    <!-- Folder not found: show upload option -->
                                                    <?php if ($row['status'] != 8) { ?>
                                                        <div class="form-row">
                                                            <form class="form-horizontal1" id="uploadhtmlfile"
                                                                enctype="multipart/form-data"><?= csrf_field() ?>
                                                                <div class="form-group col-md-12 mb-2">
                                                                    <label>Select Language</label>
                                                                    <select name="language" class="form-control">
                                                                        <option value="1">English</option>
                                                                        <option value="2">Spanish</option>
                                                                        <option value="3">French</option>
                                                                    </select>
                                                                </div>
                                                                <div class="form-group col-md-12 mb-2">
                                                                    <input type="file" name="zip_file" accept=".ZIP,.zip" required />
                                                                </div>
                                                                <div class="form-group col-md-12 mb-2">
                                                                    <input type="hidden" name="course_id" value="<?= $course_id ?>">
                                                                    <input type="hidden" name="page_id" value="<?= $page_id ?>">
                                                                    <button type="submit" class="btn btn-sm btn-danger form-control"
                                                                        id="uploadButton">
                                                                        Upload HTML Zip Package
                                                                    </button>
                                                                </div>
                                                            </form>
                                                            <div class="progress" style="display:none;">
                                                                <div class="progress-bar" role="progressbar" style="width: 0%;"
                                                                    aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    <?php } ?>
                                                <?php } ?>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            <?php } ?>


                        </div>

                        <div class="tab-pane" id="feedback">
                            <?php if (!empty($feedback)): ?>

                                <table class="table dt-responsive nowrap w-100">
                                    <thead>
                                        <tr>
                                            <th class="center">#</th>
                                            <th>Stage</th>
                                            <th>Time</th>
                                            <th>Feedback</th>
                                            <th>Status</th>
                                            <th>Creator</th>
                                            <th>On</th>
                                            <th>Reply</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php $j = 0;
                                        foreach ($feedback as $feedback_details) {

                                            $j = $j + 1; ?>
                                            <tr>
                                                <td class="center"><?php echo $j ?></td>
                                                <td><?php
                                                    $stage = $feedback_details['stage'];
                                                    switch ($stage) {
                                                        case 0:
                                                            echo '-';
                                                            break;
                                                        case 3:
                                                            echo 'Alp';
                                                            break;
                                                        case 4:
                                                            echo 'Alp 2 ';
                                                            break;
                                                        case 5:
                                                            echo 'Bet';
                                                            break;
                                                        case 6:
                                                            echo 'Bet 2';
                                                            break;
                                                        case 7:
                                                            echo 'Gam';
                                                            break;
                                                        case 8:
                                                            echo 'Gam';
                                                            break;
                                                    }
                                                    ?></td>
                                                <td><?php echo $feedback_details['videotime'] ?></td>
                                                <td><b>Comment :</b> <?php echo $feedback_details['feedback'] ?>

                                                    <div>
                                                        <?php if (isset($replies[$feedback_details['feedbackid']])) {
                                                            foreach ($replies[$feedback_details['feedbackid']] as $reply) { ?>
                                                                <b> R : </b> <?php echo $reply['feedback_replies'] ?><br />
                                                        <?php }
                                                        } ?>
                                                    </div>
                                                </td>
                                                <td><?php $status = $feedback_details['status'];
                                                    switch ($status) {
                                                        case 1:
                                                            echo 'New';
                                                            break;
                                                        case 2:
                                                            echo 'Replied';
                                                            break;
                                                        case 3:
                                                            echo 'Fixed';
                                                            break;
                                                        case 4:
                                                            echo 'QA Ver';
                                                            break;
                                                        case 5:
                                                            echo 'ReOpen';
                                                            break;
                                                        case 6:
                                                            echo 'Closed';
                                                            break;
                                                    }
                                                    ?></td>
                                                <td><?php echo $feedback_details['fname'] ?></td>
                                                <td><?php echo date('m/d', $feedback_details['createdon']); ?></td>


                                                <td>
                                                    <form class="form-horizontal"
                                                        action="<?php echo base_url('SCORM/Course_builder/review_course/showfeedbackReplies') ?>"
                                                        method="POST"><?= csrf_field() ?>
                                                        <input type="hidden" name="feedbackid"
                                                            value="<?php echo $feedback_details['feedbackid'] ?>">
                                                        <input type="hidden" name="typeofpage" value="1">
                                                        <button class="btn btn-outline-primary waves-effect btn-xs waves-light"><i
                                                                class="mdi mdi-information-outline"></i></button>
                                                    </form>
                                                </td>
                                                <!-- <td></td> -->
                                            <?php
                                        } ?>
                                            </tr>
                                    </tbody>
                                </table>



                            <?php endif; ?>
                        </div>

                    </div>


                <?php } else { ?>
                    <div class="col-lg-12 col-xl-12">
                        <div class="card">
                            <div class="card-body">
                                <ul class="nav nav-pills nav-fill navtab-bg">
                                    <li class="nav-item">
                                        <a href="#content" data-bs-toggle="tab" aria-expanded="true"
                                            class="nav-link active">
                                            Content
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#feedback" data-bs-toggle="tab" aria-expanded="false" class="nav-link">
                                            Feedback
                                        </a>
                                    </li>
                                    <!-- <li class="nav-item">
                        <a href="#storyboard" data-bs-toggle="tab" aria-expanded="false" class="nav-link ">
                            Audio
                        </a>
                    </li> -->
                                </ul>
                            </div>
                        </div>
                    </div>

                <?php } ?>



                <script>
                    $('.fa').show();

                    $('#uploadzipfile').on('submit', function(event) {
                        event.preventDefault();

                        var dataString = new FormData($('#uploadzipfile')[0]);

                        if (typeof FormData !== 'undefined') {

                            $.ajax({
                                url: '<?php echo base_url('SCORM/course_builder/Scorm_course_pages/uploadZipfile') ?>',
                                type: "POST",
                                data: dataString,
                                processData: false,
                                contentType: false,
                                beforeSend: function() {
                                    // Show progress bar
                                    $(".progress").show();
                                },
                                success: function(data) {
                                    // console.log('Server Response:', data);
                                    $('.my_update_panel').html(data);
                                    var obj = JSON.parse(data);

                                    // console.log(obj);

                                    if (obj.status === 'OK') {
                                        $('#loading_spinner').hide();
                                        // console.log('inside on condition');
                                        location.reload();
                                        alert('File Uploaded Successfully');
                                    } else {
                                        alert('error', 'Something Went Wrong! Please contact Site Admin!');
                                    }
                                },
                                error: function(xhr, textStatus, errorThrown) {
                                    // console.log('request failed');
                                },
                                complete: function() {
                                    // Hide progress bar after completion
                                    $(".progress").hide();
                                },
                                xhr: function() {
                                    var xhr = new window.XMLHttpRequest();
                                    xhr.upload.addEventListener("progress", function(evt) {
                                        // Update progress bar
                                        if (evt.lengthComputable) {
                                            var percentComplete = (evt.loaded / evt.total) * 100;
                                            $(".progress-bar").width(percentComplete + '%');
                                            $(".progress-bar").html(percentComplete.toFixed(2) + '%');
                                        }
                                    }, false);
                                    return xhr;
                                }
                            });

                        } else {
                            message("Your Browser Don't support FormData API! Use IE 10 or Above!");
                        }
                    });
                </script>
                <script>
                    $('.fa').show();

                    $('#uploadhtmlfile').on('submit', function(event) {
                        event.preventDefault();

                        var dataString = new FormData($('#uploadhtmlfile')[0]);

                        if (typeof FormData !== 'undefined') {

                            $.ajax({
                                url: '<?php echo base_url('SCORM/course_builder/Scorm_course_pages/uploadHTML') ?>',
                                type: "POST",
                                data: dataString,
                                processData: false,
                                contentType: false,
                                beforeSend: function() {
                                    // Show progress bar
                                    $(".progress").show();
                                },
                                success: function(data) {
                                    // console.log('Server Response:', data);
                                    $('.my_update_panel').html(data);
                                    var obj = JSON.parse(data);

                                    // console.log(obj);

                                    if (obj.status === 'OK') {
                                        $('#loading_spinner').hide();
                                        // console.log('inside on condition');
                                        location.reload();
                                        alert('File Uploaded Successfully');
                                    } else {
                                        alert('error', 'Something Went Wrong! Please contact Site Admin!');
                                    }
                                },
                                error: function(xhr, textStatus, errorThrown) {
                                    // console.log('request failed');
                                },
                                complete: function() {
                                    // Hide progress bar after completion
                                    $(".progress").hide();
                                },
                                xhr: function() {
                                    var xhr = new window.XMLHttpRequest();
                                    xhr.upload.addEventListener("progress", function(evt) {
                                        // Update progress bar
                                        if (evt.lengthComputable) {
                                            var percentComplete = (evt.loaded / evt.total) * 100;
                                            $(".progress-bar").width(percentComplete + '%');
                                            $(".progress-bar").html(percentComplete.toFixed(2) + '%');
                                        }
                                    }, false);
                                    return xhr;
                                }
                            });

                        } else {
                            message("Your Browser Don't support FormData API! Use IE 10 or Above!");
                        }
                    });
                </script>
                <script>
                    function checkImageDimensions() {
                        const input = document.getElementById('imageInput');
                        const file = input.files[0];

                        if (file) {
                            const img = new Image();

                            img.onload = function() {
                                const width = this.width;
                                const height = this.height;

                                // Set your desired dimensions
                                const desiredWidth = 420;
                                const desiredHeight = 236;

                                if (width === desiredWidth && height === desiredHeight) {
                                    // Dimensions are correct
                                    alert('Image dimensions are correct. You can proceed with the upload.');
                                } else {
                                    // Dimensions are not correct
                                    alert('Image dimensions are not correct. Please choose an image with dimensions 450x236.');
                                    // Optionally, you can reset the file input to clear the selected file
                                    // input.value = '';
                                }
                            };

                            img.src = URL.createObjectURL(file);
                        }
                    }
                </script>

                <script>
                    $(document).ready(function() {
                        $('#addNewfeedback').on('submit', function(event) {

                            event.preventDefault();

                            var dataString = new FormData($('#addNewfeedback')[0]);

                            var vidDuration = parent.GetVideoTime();
                            dataString.append("videotime", vidDuration);

                            if (typeof FormData !== 'undefined') {
                                $.ajax({
                                    url: '<?php echo base_url('SCORM/Course_builder/review_course/addNewfeedback') ?>',
                                    type: "POST",
                                    data: dataString,
                                    async: false,
                                    processData: false,
                                    contentType: false,
                                    success: function(data) {
                                        var obj = JSON.parse(data);
                                        console.log(obj);
                                        if (obj.status === 'OK') {
                                            console.log('inside on condition');
                                            location.reload();
                                            // $("#result").load("SCORM/Course_builder/page_feedback_view");

                                        } else {

                                            alert('error', 'Something Went Wrong! Please contact Site Admin!');
                                        }

                                    },
                                    error: function(xhr, textStatus, errorThrown) {
                                        console.log('request failed');
                                    }
                                })
                            } else {
                                message("Your Browser Don't support FormData API! Use IE 10 or Above!");
                            }

                        });
                    });
                </script>
                <script>
                    $(document).on('submit', '.replay_inside_form', function(event) {
                        event.preventDefault();

                        var form = $(this); // This refers to the dynamically generated form that was submitted
                        var dataString = new FormData(form[0]);

                        if (typeof FormData !== 'undefined') {
                            $.ajax({
                                url: '<?php echo base_url('SCORM/Course_builder/review_course/addreplyfeedback') ?>',
                                type: "POST",
                                data: dataString,
                                async: false,
                                processData: false,
                                contentType: false,
                                success: function(data) {
                                    var obj = JSON.parse(data);
                                    console.log(obj);

                                    if (obj.status === 'OK') {
                                        // You can reload or update the DOM dynamically here if needed
                                        location.reload(); // Uncomment if you want to reload the page
                                        // console.log('Reply submitted successfully');
                                    } else {
                                        alert('Error: Something went wrong. Please contact Site Admin!');
                                    }
                                },
                                error: function(xhr, textStatus, errorThrown) {
                                    console.log('Request failed');
                                }
                            });
                        } else {
                            alert("Your browser doesn't support FormData API! Use IE 10 or above.");
                        }
                    });
                </script>
                <script>
                    $(document).on('submit', '.delete_feedback', function(event) {
                        event.preventDefault();

                        var form = $(this); // This refers to the dynamically generated form that was submitted
                        var dataString = new FormData(form[0]);

                        if (typeof FormData !== 'undefined') {
                            $.ajax({
                                url: '<?php echo base_url('SCORM/Course_builder/review_course/delete_feedback') ?>',
                                type: "POST",
                                data: dataString,
                                async: false,
                                processData: false,
                                contentType: false,
                                success: function(data) {
                                    var obj = JSON.parse(data);
                                    console.log(obj);

                                    if (obj.status === 'OK') {
                                        // You can reload or update the DOM dynamically here if needed
                                        location.reload(); // Uncomment if you want to reload the page
                                        // console.log('Reply submitted successfully');
                                    } else {
                                        alert('Error: Something went wrong. Please contact Site Admin!');
                                    }
                                },
                                error: function(xhr, textStatus, errorThrown) {
                                    console.log('Request failed');
                                }
                            });
                        } else {
                            alert("Your browser doesn't support FormData API! Use IE 10 or above.");
                        }
                    });
                </script>
                <script>
                    $(document).on('submit', '.delete_reply', function(event) {
                        event.preventDefault();

                        var form = $(this); // This refers to the dynamically generated form that was submitted
                        var dataString = new FormData(form[0]);

                        if (typeof FormData !== 'undefined') {
                            $.ajax({
                                url: '<?php echo base_url('SCORM/Course_builder/review_course/delete_reply') ?>',
                                type: "POST",
                                data: dataString,
                                async: false,
                                processData: false,
                                contentType: false,
                                success: function(data) {
                                    var obj = JSON.parse(data);
                                    console.log(obj);

                                    if (obj.status === 'OK') {
                                        // You can reload or update the DOM dynamically here if needed
                                        location.reload(); // Uncomment if you want to reload the page
                                        // console.log('Reply submitted successfully');
                                    } else {
                                        alert('Error: Something went wrong. Please contact Site Admin!');
                                    }
                                },
                                error: function(xhr, textStatus, errorThrown) {
                                    console.log('Request failed');
                                }
                            });
                        } else {
                            alert("Your browser doesn't support FormData API! Use IE 10 or above.");
                        }
                    });
                </script>
                <script>
                    document.getElementById('uploadForm').addEventListener('submit', function() {
                        var button = document.getElementById('uploadButton');
                        button.disabled = true;
                        button.innerHTML = 'Uploading...';
                    });
                </script>
                <script>
                    document.getElementById('uploadhtmlfile').addEventListener('submit', function() {
                        var button = document.getElementById('uploadButton');
                        button.disabled = true;
                        button.innerHTML = 'Uploading...';
                    });
                </script>
                <script>
                    document.getElementById('uploadzipfile').addEventListener('submit', function() {
                        var button = document.getElementById('uploadButton');
                        button.disabled = true;
                        button.innerHTML = 'Uploading...';
                    });
                </script>
                <script>
                    function toggleTrueFalse(button, optionId) {
                        const questionId = button.getAttribute('data-question-id');
                        const type = button.getAttribute('data-type');
                        const currentStatus = button.getAttribute('data-current');

                        const newStatus = currentStatus === '1' ? '2' : '1';

                        if (type === '5' && newStatus === '1') {
                            const buttons = document.querySelectorAll(`button[data-question-id="${questionId}"]`);
                            const alreadyCorrect = Array.from(buttons).some(btn =>
                                btn.getAttribute('data-current') === '1'
                            );

                            if (alreadyCorrect) {
                                alert("Only one correct answer is allowed for this single-choice question. Please unselect the current answer before selecting a new one.");
                                return;
                            }
                        }

                        // Proceed with AJAX update
                        updateDate(newStatus, 'truefalse', optionId);
                    }
                </script>


                <script>
                    function updateScoreValue(newValue) {
                        document.getElementById("scoreInput").value = newValue;
                    }
                </script>
                <script>
                    // document.addEventListener("DOMContentLoaded", function() {
                    //     const scoreInput = document.getElementById("scoreInput");
                    //     const trueFalseRadioYes = document.querySelector("input[value='1']");
                    //     const submitButton = document.getElementById("submitButton");

                    //     function updateScoreValue(value) {
                    //         scoreInput.value = value;
                    //     }

                    //     submitButton.addEventListener("click", function(event) {
                    //         const enteredScore = parseFloat(scoreInput.value);
                    //         const trueFalseChecked = trueFalseRadioYes.checked;

                    //         if (!trueFalseChecked && enteredScore > 0) {
                    //             alert("Please enter a non-positive value for the score.");
                    //             event.preventDefault(); // Prevent form submission
                    //         }
                    //     });
                    // });
                </script>
                <script>
                    var coll = document.getElementsByClassName("collapsible");
                    var i;

                    for (i = 0; i < coll.length; i++) {
                        coll[i].addEventListener("click", function() {
                            this.classList.toggle("active");
                            var contented = this.nextElementSibling;
                            if (contented.style.display === "block") {
                                contented.style.display = "none";
                            } else {
                                contented.style.display = "block";

                            }
                        });
                    }

                    function updateDate(element, column, id) {
                        if (column == 'truefalse' || column == 'status') {
                            var value = element;
                        } else {
                            var value = element.innerText;
                        }
                        console.log(value + column + id);
                        let scourse_id = '<?php echo $scourse_id ?>';
                        let question_id = '<?php echo isset($qrow['q_id']) ? $qrow['q_id'] : '' ?>';
                        ///conole.log($(this).find(':selected').data('id'));
                        $.ajax({
                            url: '<?php echo base_url('Assessment/trainings/updatedateformat') ?>',
                            type: 'post',
                            data: {
                                value: value,
                                column: column,
                                id: id,
                                scourse_id: scourse_id,
                                question_id: question_id
                            },
                            success: function(data) {
                                var obj = JSON.parse(data);

                                console.log(obj);

                                if (obj.status === 'OK') {
                                    console.log('inside on condition');
                                    // if (column == 'duration' || column == 'start_day') {
                                    location.reload(true);
                                    // }

                                } else {
                                    alert(obj.status, 'Something Went Wrong! Please contact Site Admin!');
                                }
                                location.reload(true);
                            },
                            error: function(xhr, textStatus, errorThrown) {
                                console.log('request failed');
                            }

                        })

                    }

                    function addDate(element, column, id) {
                        if (column == 'truefalse') {
                            var value = element;
                        } else {
                            var value = element.innerText;
                        }
                        // console.log(value + column + id);
                        let scourse_id = '<?php echo $scourse_id ?>';
                        let question_id = '<?php echo isset($qrow['q_id']) ? $qrow['q_id'] : '' ?>';
                        // /conole.log($(this).find(':selected').data('id'));
                        $.ajax({
                            url: '<?php echo base_url('Assessment/trainings/adddateformat') ?>',
                            type: 'post',
                            data: {
                                value: value,
                                column: column,
                                id: id,
                                scourse_id: scourse_id,
                                question_id: question_id
                            },
                            success: function(data) {
                                var obj = JSON.parse(data);

                                console.log(obj);

                                if (obj.status === 'OK') {
                                    console.log('inside on condition');
                                    if (column == 'duration' || column == 'start_day') {
                                        location.reload(true);
                                    }

                                } else {
                                    alert(obj.status, 'Something Went Wrong! Please contact Site Admin!');
                                }
                                location.reload(true);
                            },
                            error: function(xhr, textStatus, errorThrown) {
                                console.log('request failed');
                            }

                        })

                    }
                </script>
                <script>
                    document.getElementById('addRowBtn').addEventListener('click', function() {
                        var tableBody = document.getElementById('table-body');

                        var rowCount = tableBody.getElementsByTagName('tr').length + 1;

                        // Create a new row
                        var newRow = document.createElement('tr');

                        newRow.innerHTML = `
            <td>${rowCount}</td>
           
            <td contenteditable="true" onBlur="addDate(this,'values','new')"></td>
            <td contenteditable="true" onBlur="addDate(this,'score','new')"></td>
             <td>
                <button type="button" class="collapsible" title="toggle" class="nav-link" data-widget="pushmenu">&nbsp;&nbsp;</button>
                <div class="contented">
                    <label>Correct</label>&nbsp;
                     <div class="form-check-inline">
                        <label class="form-check-label">
                            <input type="radio" name="truefalse" class="form-check-input" value="2" checked onclick="updateDate('2','truefalse','new')" id="radioNo"> No
                        </label>
                    </div>
                      <div class="form-check-inline">
                        <label class="form-check-label">
                            <input type="radio" name="truefalse" class="form-check-input" value="1" onclick="updateDate('1','truefalse','new')"> Yes
                        </label>
                    </div>
                </div>
            </td>
        `;

                        // Append the new row to the table body
                        tableBody.appendChild(newRow);
                    });
                </script>

                </div>
            </div>