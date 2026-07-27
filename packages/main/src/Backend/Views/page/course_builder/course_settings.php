<?php $userlevel = session()->get('userlevel');
$arrayuserlevel = array_map('intval', explode(',', $userlevel));
$client = session()->get('client');
?>
<div class="row">
    <div class="col-12">
        <div class="page-title-box">
            <div class="page-title-right">
                <ol class="breadcrumb m-0">

                    <li class="breadcrumb-item"><a href="<?php echo base_url('SCORM/course_builder/Editor'); ?>">Course
                            Builder</a></li>
                </ol>
            </div>
            <h4 class="page-title">
                Course Settings - <?php echo $course_name; ?>
            </h4>
        </div>
    </div>
</div>


<?php
$pageidSubpageidArray = [
    "allPageIds" => ["0"],
    "allSubPageIds" => []
];

foreach ($pagesDetails as $item) {
    $pageId = (string) $item['page_id'];
    $subPageMain = (string) $item['sub_page_main'];

    // If this is a main page (sub_page_main == 0)
    if ($subPageMain == "0") {
        if (!in_array($pageId, $pageidSubpageidArray["allPageIds"])) {
            $pageidSubpageidArray["allPageIds"][] = trim($pageId);
        }

        if (!isset($pageidSubpageidArray["allSubPageIds"][$pageId])) {
            $pageidSubpageidArray["allSubPageIds"][$pageId] = ["0"];
        }
    } else {
        // This is a sub-page
        foreach ($pagesDetails as $mainPage) {
            if ((string) $mainPage["page_number"] == floor($item["page_number"])) {
                $mainPageId = (string) $mainPage["page_id"];
                if (!isset($pageidSubpageidArray["allSubPageIds"][$mainPageId])) {
                    $pageidSubpageidArray["allSubPageIds"][$mainPageId] = ["0"];
                }
                $pageidSubpageidArray["allSubPageIds"][$mainPageId][] = trim($pageId);
                break;
            }
        }
    }
}
?>

<div class="row">
    <?php if (in_array('67', $arrayuserlevel) || in_array('46', $arrayuserlevel)) { ?>
        <div class="col-lg-4">
            <form action="<?php echo base_url('SCORM/course_builder/Scorm_course_pages/add_test_feedback') ?>"
                method="POST"><?= csrf_field() ?>
                <input type="hidden" name="scourse_id" value="<?php echo $scourse_id ?>">
                <button type="submit" title="Add Test Feedback" class="btn btn-sm btn-light waves-effect"
                    onclick="return confirm('<?php echo lang('Alert.Aler_006') ?>')"><i
                        class="mdi mdi-thumb-up-outline font-18"></i> Add Test Feedback</button>
            </form>
        </div>
        <div class="col-lg-4">
            <form action="<?php echo base_url('SCORM/course_builder/Scorm_course_pages/delete_test_feedback') ?>"
                method="POST"><?= csrf_field() ?>
                <input type="hidden" name="scourse_id" value="<?php echo $scourse_id ?>">
                <button type="submit" title="Delete Test Feedback" class="btn btn-sm btn-light waves-effect"
                    onclick="return confirm('<?php echo lang('Alert.Aler_007') ?>')"><i
                        class="mdi mdi-delete-circle font-18"></i> Delete Test Feedback</button>
            </form>
        </div>
    <?php } ?>
    <div class="col-lg-4">
        <form action="<?php echo base_url('SCORM/course_builder/Scorm_course_pages/delete_course_pages') ?>"
            method="POST"><?= csrf_field() ?>
            <input type="hidden" name="scourse_id" value="<?php echo $scourse_id ?>">
            <button type="submit" title="Delete All Pages" class="btn btn-sm btn-light waves-effect"
                onclick="return confirm('<?php echo lang('Alert.Aler_008') ?>')"><i
                    class="mdi mdi-delete-circle font-18"></i> Delete All Pages</button>
        </form>
    </div>

</div>
<br><br>

<div class="row">
    <div class="col-lg-12">
        <div class="card">
            <div class="card-body"> <?php
            // Output the result as JSON
            echo 'pageidSubpageidArray = ' . json_encode($pageidSubpageidArray) . ';';
            ?>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-lg-12">
        <div class="card">
            <div class="card-body">
                <table class="table dt-responsive nowrap w-100">
                    <thead>
                        <tr>
                            <th width=5%>#</th>
                            <th width=5%>Return</th>
                            <th>Page ID</th>
                            <th>Page name</th>
                            <th>Type</th>
                            <th>Status</th>


                    </thead>

                    <tbody class="row_position">
                        <?php $j = 0;
                        //  $nxt_page = 1;
                        foreach ($pagesDetails as $eachpagesDetails) {
                            ?>

                            <tr id="<?php $eachpagesDetails['page_id']; ?>">
                                <td><?php echo abs($eachpagesDetails['page_number']); ?></td>
                                <td><?php $sup_Page_id = $eachpagesDetails['sub_page_main'];
                                if ($sup_Page_id > 0)
                                    echo abs($sup_Page_id); ?></td>
                                <td><?php echo $eachpagesDetails['page_id'] ?></td>
                                <td><?php echo $eachpagesDetails['page_name'] ?></td>
                                <td>
                                    <?php
                                    $type = $eachpagesDetails['type'];
                                    switch ($type) {
                                        case 1:
                                            echo 'Articulate';
                                            break;
                                        case 2:
                                            echo 'Video';
                                            break;
                                        case 3:
                                            echo 'Html';
                                            break;
                                        case 4:
                                            echo 'Quiz';
                                            break;
                                        case 5:
                                            echo 'SCQ CYU';
                                            break;
                                        case 6:
                                            echo 'MCQ CYU';
                                            break;
                                        case 8:
                                            echo 'Video Sub Page';
                                            break;
                                        case 9:
                                            echo 'Audio Version';
                                            break;
                                    }

                                    ?>
                                </td>
                                <td>
                                    <?php
                                    $status = $eachpagesDetails['status'];
                                    switch ($status) {
                                        case 1:
                                            echo 'Editing';
                                            break;
                                        case 6:
                                            echo 'Ready for Dev';
                                            break;
                                        case 7:
                                            echo 'Dev Completed';
                                            break;
                                        case 8:
                                            echo 'QA Approved';
                                            break;
                                    }
                                    ?>
                                </td>

                            </tr>

                            <?php
                            $j++;
                            /*  if ($pagesDetails) {
                                $nxt_page = $eachpagesDetails['page_number'] + 1;
                            } else {
                                $nxt_page = 1;
                            } */
                        } ?>
                    </tbody>
                </table>


            </div>
        </div>
    </div>
</div>