<div class="row">
    <div class="col-12">
        <div class="page-title-box">
            <div class="page-title-right">
                <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><a
                            href="<?php echo base_url('SCORM/course_builder/Editor'); ?>">Pages</a>
                    </li>
                </ol>
            </div>
            <h4 class="page-title"> Full Storyboard </h4>
        </div>
    </div>
</div>
<div class="row" style="margin-bottom: 10px;text-align: right;">
    <a href="<?php echo base_url('SCORM/course_builder/Scorm_course_pages/generate_transcript_pdf'); ?>"><button
            class="btn btn-outline-warning waves-effect btn-sm waves-light mb-3">Generate Audio Transcript Pdf</button></a>
</div>
<div class="row">
    <div class="col-md-12">
        <table class="table table-bordered">
            <thead>

            </thead>
            <tbody>
                <?php
                $currentpage = 0;
                foreach ($full_sb as $content) {
                    if ($currentpage != $content['page_number']) {
                        echo '<tr class="table-success">';
                        echo '<td style="width:50%">Page: <strong>' . abs($content['page_number']) . ' : ' . $content['page_name'] . '</strong></td>';
                        echo '<td style="width:20%"></td>';
                        echo '<td style="width:20%">Page Type: <strong>';
                        $type = $content['type'];
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
                        echo '</strong></td>';
                        echo '<td style="width:10%">Edit</td>';
                        echo '</tr>';
                        echo '<tr class="table-info">';
                        echo '<td style="width:50%">Audio Text/Transcript</td>';
                        echo '<td style="width:20%">On Screen</td>';
                        echo '<td style="width:20%">Production Notes</td>';
                        echo '<td style="width:10%">';
                        ?>
                        <form class="form-horizontal"
                            action="<?php echo base_url('SCORM/course_builder/scorm_course_pages/page_edit_view') ?>"
                            method="POST"><?= csrf_field() ?>
                            <input type="hidden" name="page_id" value="<?php echo $content['page_id']; ?>">
                            <input type="hidden" name="page_number" value="<?php echo $content['page_number']; ?>">
                            <input type="hidden" name="page_name" value="<?php echo $content['page_name']; ?>">
                            <button type="submit" class="btn btn-outline-warning waves-effect btn-xs waves-light"><span class="mdi mdi-pencil-outline"></span> Edit</button>
                        </form>
                        <?php
                        echo '</td>';
                        echo '</tr>';
                    }
                    echo '<tr>';
                    echo '<td style="width:40%">' . $content['audio'] . '</td>';
                    echo '<td>' . $content['on_screen_text'] . '</td>';
                    echo '<td>' . $content['production_notes'] . '</td>';
                    echo '<td>';

                    echo '</td>';
                    echo '</tr>';
                    $currentpage = $content['page_number'];
                }
                ?>
            </tbody>
        </table>
    </div>
</div>
</div>