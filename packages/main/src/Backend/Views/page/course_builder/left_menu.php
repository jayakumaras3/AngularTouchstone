<?php $userlevel = session()->get('userlevel');
$arrayuserlevel  = array_map('intval', explode(',', $userlevel));
$client = session()->get('client');
?>
<style>
    .btn-icon-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .btn-icon-text i {
        line-height: 1;
    }

    .icon-number {
        font-size: 11px;
        color: #6c757d;
        font-weight: 600;
    }
</style>
<div class="row">
    <div class="col-12">
        <div class="page-title-box">
            <div class="page-title-right">
                <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><a href="<?php echo base_url($courses_link); ?>"><?= esc($courses_link_label) ?></a></li>
                    <li class="breadcrumb-item"><a href="<?php echo base_url('my_training/read_more'); ?>">Course
                            Detail</a></li>
                </ol>
            </div>
            <h4 class="page-title">
                Course Builder
            </h4>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-12">
        <div class="card">
            <div class="card-body">

                <div class="d-flex align-items-center justify-content-between">

                    <!-- LEFT: Course name -->
                    <h4 class="mb-0">
                        <?php echo $courseDetails[0]['course_name']; ?>
                    </h4>
                    <?php
                    if ($pagesDetails) {
                        $arrayleng = count($pagesDetails) - 1;
                        $nxt_page = $pagesDetails[$arrayleng]['page_number'] + 1;
                    } else {
                        $nxt_page = 1;
                    }

                    ?>
                    <!-- RIGHT: Buttons -->
                    <div class="btn-group">

                        <form action="<?php echo base_url('SCORM/course_builder/Scorm_course_pages/view_full_sb') ?>" method="POST"><?= csrf_field() ?>
                            <input type="hidden" name="scourse_id" value="<?php echo $scourse_id ?>">
                            <button type="submit" title="Full Storyboard" class="btn btn-sm btn-light waves-effect btn-icon-text">
                                <i class="mdi mdi-book-open font-16"></i>
                                <span class="icon-number">Storyboard</span>
                            </button>
                        </form>

                        <?php if ($courseDetails[0]['type'] == 11 && (in_array('5', $arrayuserlevel) || in_array('46', $arrayuserlevel) || in_array('67', $arrayuserlevel) || in_array('4', $arrayuserlevel) || in_array('44', $arrayuserlevel))) { ?>
                            <form action="<?php echo base_url('SCORM/course_builder/Scorm_course_pages/page_pdf_view') ?>" method="POST"><?= csrf_field() ?>
                                <input type="hidden" name="course_name" value="<?php echo $courseDetails[0]['course_name']; ?>">
                                <input type="hidden" name="scourse_id" value="<?php echo $scourse_id ?>">
                                <button type="submit" title="Export SCORM" class="btn btn-sm btn-light waves-effect btn-icon-text">
                                    <i class="mdi mdi-download font-16"></i>
                                    <span class="icon-number">Export</span>
                                </button>
                            </form>
                        <?php } ?>

                        <?php if (in_array('67', $arrayuserlevel) || in_array('46', $arrayuserlevel) || in_array('5', $arrayuserlevel)) { ?>
                            <form action="<?php echo base_url('SCORM/course_builder/Editor/settings') ?>" method="POST"><?= csrf_field() ?>
                                <input type="hidden" name="course_name" value="<?php echo $courseDetails[0]['course_name']; ?>">
                                <input type="hidden" name="scourse_id" value="<?php echo $scourse_id ?>">
                                <button type="submit" title="Developer Settings" class="btn btn-sm btn-light waves-effect btn-icon-text">
                                    <i class="mdi mdi-cog-outline font-16"></i>
                                    <span class="icon-number">Settings</span>
                                </button>
                            </form>
                        <?php } ?>

                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
<div class="row">
    <div class="col-xl-3 col-lg-6 order-lg-1 order-xl-1">
        <!-- start profile info -->
        <div class="card">
            <div class="card-body">
                <div class="todoapp">
                    <div class="row">
                        <div class="col mb-1">
                            <h5 id="todo-message">MENU</h5>
                        </div>
                        <div class="col-auto">
                            <form action="<?php echo base_url('SCORM/course_builder/Scorm_course_pages/page_add_view') ?>" method="POST"><?= csrf_field() ?>
                                <input type="hidden" name="nxt_pageid" value="<?php echo $nxt_page; ?>">
                                <input type="hidden" name="scourse_id" value="<?php echo $scourse_id ?>">
                                <button type="submit" class="btn btn-outline-primary btn-xs rounded-pill waves-effect waves-light float-end btn-sm"><i class="mdi mdi-plus-circle"></i> Create New Page</button>
                            </form>
                        </div>
                    </div>


                    <div style="max-height: 480px;" data-simplebar="init">
                        <hr>
                        <div class="simplebar-wrapper" style="margin: 0px;">
                            <div class="simplebar-height-auto-observer-wrapper">
                                <div class="simplebar-height-auto-observer"></div>
                            </div>
                            <div class="simplebar-mask">
                                <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                                    <div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style="height: auto; overflow:  scroll;">
                                        <div class="simplebar-content" style="padding: 0px;">
                                            <ul class="list-group list-group-flush todo-list" id="todo-list">

                                                <?php foreach ($pagesDetails as $eachpagesDetails) {
                                                ?>
                                                    <form class="form-horizontal" action="<?php echo base_url('SCORM/course_builder/Editor') ?>" method="POST"><?= csrf_field() ?>
                                                        <input type="hidden" name="page_id" value="<?php echo $eachpagesDetails['page_id'] ?>">
                                                        <input type="hidden" name="page_number" value="<?php echo $eachpagesDetails['page_number'] ?>">
                                                        <input type="hidden" name="page_name" value="<?php echo $eachpagesDetails['page_name'] ?>">
                                                        <button type="submit"
                                                            <?php if (isset($current_page_id) && $current_page_id == $eachpagesDetails['page_id']) {
                                                                echo 'class="list-group-item list-group-item-action active fw-semibold border-0">';
                                                            } else {
                                                                echo 'class="list-group-item list-group-item-action  border-0">';
                                                            }
                                                            echo '<span class="font-10">' . $eachpagesDetails['page_number'] . '</span> | ';
                                                            $type = $eachpagesDetails['type'];

                                                            echo $eachpagesDetails['page_name'];
                                                            switch ($type) {
                                                                case 1:
                                                                    echo '<i class="mdi mdi-alpha-a-circle-outline font-12  float-end ms-1 "></i>';
                                                                    break;
                                                                case 2:
                                                                    echo '<i class="mdi mdi-video-outline font-12  float-end ms-1 "></i>';
                                                                    break;
                                                                case 8:
                                                                    echo '<i class="mdi mdi-video-plus-outline font-12  float-end ms-1 "></i>';
                                                                    break;
                                                                case 3:
                                                                    echo '<i class="mdi mdi-language-html5 font-12  float-end ms-1 "></i>';
                                                                    break;
                                                                case 4:
                                                                    echo '<i class="mdi mdi-crosshairs-question font-12  float-end ms-1 "></i>';
                                                                    break;
                                                                case 5:
                                                                    echo '<i class="mdi mdi-radiobox-marked font-12  float-end ms-1 "></i>';
                                                                    break;
                                                                case 6:
                                                                    echo '<i class="mdi mdi-checkbox-marked-outline font-12  float-end ms-1 "></i>';
                                                                    break;
                                                                case 9:
                                                                    echo '<i class="mdi mdi-speaker font-12  float-end ms-1 "></i>';
                                                                    break;
                                                            }
                                                            $status = $eachpagesDetails['status'];
                                                            switch ($status) {
                                                                case 1:
                                                                    echo '<span class="badge badge-soft-info float-end ms-1">SB</span>';
                                                                    break;
                                                                case 6:
                                                                    echo '<span class="badge badge-soft-danger float-end ms-1">Dev</span>';
                                                                    break;
                                                                case 7:
                                                                    echo '<span class="badge badge-soft-warning float-end ms-1">QA</span>';
                                                                    break;
                                                                case 8:
                                                                    echo '<span class="badge badge-soft-success float-end ms-1">App</span>';
                                                                    break;
                                                            }
                                                            ?>
                                                            </button>
                                                    </form>
                                                <?php } ?>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="simplebar-placeholder" style="width: auto; height: 480px;"></div>
                        </div>
                        <div class="simplebar-track simplebar-horizontal" style="visibility: visible;">
                            <div class="simplebar-scrollbar" style="width: 0px; display: none;"></div>
                        </div>
                        <div class="simplebar-track simplebar-vertical" style="visibility: visible;">
                            <div class="simplebar-scrollbar" style="height: 266px; display: block; transform: translate3d(0px, 43px, 0px);"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>