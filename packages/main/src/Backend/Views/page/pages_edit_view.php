<div class="row">
	<div class="col-12">
		<div class="page-title-box">
			<div class="page-title-right">
				<ol class="breadcrumb m-0">
						<li class="breadcrumb-item"><a href="<?php echo base_url('SCORM/course_builder/Editor'); ?>">Pages</a></li>
				</ol>
			</div>
			<?php
			$sub_page_main = $row['sub_page_main'];
			if ($sub_page_main > 0) {
			?>
				<h4 class="page-title">Edit Sub Page of <?php echo $row['page_number'] ?></h4>
			<?php
			} else {
			?>
				<h4 class="page-title">Edit Page <?php echo $row['page_number'] ?></h4>
			<?php
			}
			?>
		</div>
	</div>
</div>

<div class="row">
	<div class="col-6 col-md-6 col-lg-12">
		<div class="row">
			<?php
			$sub_page_main = $row['sub_page_main'];
			if ($sub_page_main == 0) {
			?>
				<div class="form-group col-md-4 mb-2">
					<?php if ($prev_page) { ?>
						<form class="form-horizontal" action="<?php echo base_url('SCORM/course_builder/scorm_course_pages/page_edit_view') ?>" method="POST"><?= csrf_field() ?>
							<input type="hidden" name="page_id" value="<?php echo $prev_page[0]['page_id'] ?>">
							<input type="hidden" name="page_number" value="<?php echo $prev_page[0]['page_number'] ?>">
							<input type="hidden" name="page_name" value="<?php echo $prev_page[0]['page_name'] ?>">
							<button type="submit" alt="Next" class="" style="all: unset; cursor: pointer;"><i class="mdi mdi-arrow-left-circle-outline font-22"></i></button>

						</form>
					<?php } ?>
				</div>
				<div class="form-group col-md-4 mb-2">
					<form class="form-horizontal  float-end mt-0" action="<?php echo base_url('SCORM/course_builder/Scorm_course_pages/page_add_sub_page') ?>" method="POST"><?= csrf_field() ?>
						<input type="hidden" name="page_number" value="<?php echo $row['page_number'] ?>">
						<input type="hidden" name="page_id" value="<?php echo $page_id; ?>">
						<input type="hidden" name="scourse_id" value="<?php echo $course_id ?>">
						<button type="submit" class="btn btn-outline-danger waves-effect waves-light">Create Sub Page <i class="mdi mdi-arrow-up-bold-circle-outline"></i></button>
					</form>
				</div>
				<div class="form-group col-md-4 mb-2 ribbon ribbon-blue float-start">
					<?php if ($next_page) { ?>
						<form class="form-horizontal  float-end mt-0" action="<?php echo base_url('SCORM/course_builder/scorm_course_pages/page_edit_view') ?>" method="POST"><?= csrf_field() ?>
							<input type="hidden" name="page_id" value="<?php echo $next_page[0]['page_id'] ?>">
							<input type="hidden" name="page_number" value="<?php echo $next_page[0]['page_number'] ?>">
							<input type="hidden" name="page_name" value="<?php echo $next_page[0]['page_name'] ?>">
							<button type="submit" alt="Next" style="all: unset; cursor: pointer;"><i class="mdi mdi-arrow-right-circle-outline font-22"></i></button>
						</form>
						<?php } else {
						if ($sub_page_main == 0) {
							$nxt_page = $row['page_number'] + 1;
						?>
							<form class="form-horizontal  float-end mt-0" action="<?php echo base_url('SCORM/course_builder/Scorm_course_pages/page_add_view') ?>" method="POST"><?= csrf_field() ?>
								<input type="hidden" name="nxt_pageid" value="<?php echo $nxt_page; ?>">
								<input type="hidden" name="course_id" value="<?php echo $course_id ?>">
								<button type="submit" class="btn btn-danger rounded-pill waves-effect waves-light">Create New Page <i class="mdi mdi-arrow-right-bold-circle-outline"></i></button>
							</form>
					<?php
						}
					} ?>
				</div>
			<?php
			} else {
				// print_r($row['page_number']);
			?>
				<form class="form-horizontal mb-2" action="<?php echo base_url('SCORM/course_builder/scorm_course_pages/page_edit_view') ?>" method="POST"><?= csrf_field() ?>
					<input type="hidden" name="page_id" value="<?php echo $row['sub_page_main']; ?>">
					<input type="hidden" name="page_number" value="<?php echo $row['sub_page_main']; ?>">
					<input type="hidden" name="course_id" value="<?php echo $course_id ?>">
					<input type="hidden" name="page_name" value="">
					<button type="submit" class="btn btn-success rounded-pill waves-effect waves-light"><i class="mdi mdi-arrow-left-bold-circle-outline"></i> Main</button>
				</form>
			<?php
			}
			?>

		</div>
		<?php
		$subpages_Count = count($sub_page_content);
		if ($subpages_Count > 0) {
			echo '<div class="row">';
			foreach ($sub_page_content as $subPages) {

		?>
				<div class="col-3 col-md-3 col-lg-3">
					<form class="form-horizontal mb-2" action="<?php echo base_url('SCORM/course_builder/scorm_course_pages/page_edit_view') ?>" method="POST"><?= csrf_field() ?>
						<input type="hidden" name="page_number" value="<?php echo $subPages['page_number']; ?>">
						<input type="hidden" name="page_id" value="<?php echo $subPages['page_id']; ?>">
						<input type="hidden" name="page_name" value="<?php echo $subPages['page_name']; ?>">
						<button type="submit" class="btn btn-outline-dark waves-effect waves-light"><?php echo  $subPages['page_number']; ?> <?php echo  $subPages['page_name']; ?></button>
					</form>
				</div>
		<?php
			}
			echo '</div>';
		}
		?>


		<div class="row">
			<div class="col-6 col-md-6 col-lg-12">
				<div class="card">
					<div class="card-body">
						<form class="form-horizontal" action="<?php echo base_url($form_link) ?>" method="POST" id="submitForm"><?= csrf_field() ?>
							<div class="row">
								<div class="form-group col-md-4 mb-2">
									<label>Page Name</label>
									<input type="text" class="form-control col-md-12" name="page_name" placeholder="Page Name" value="<?php echo $row['page_name'] ?>" />
								</div>
								<div class="form-group col-md-2 mb-2">
									<label>Page Type</label>
									<select name="type" class="form-control">
										<option value="1" <?php echo ($row['type'] == 1) ? 'selected' : ''; ?>>Articulate</option>
										<option value="9" <?php echo ($row['type'] == 9) ? 'selected' : ''; ?>>Audio Version</option>
										<option value="2" <?php echo ($row['type'] == 2) ? 'selected' : ''; ?>>Video</option>
										<option value="8" <?php echo ($row['type'] == 8) ? 'selected' : ''; ?>>Video Sub Page</option>
										<option value="3" <?php echo ($row['type'] == 3) ? 'selected' : ''; ?>>Html</option>
										<!--<option value="4" <?php echo ($row['type'] == 4) ? 'selected' : ''; ?>>Quiz</option>
									 <option value="5" <?php echo ($row['type'] == 5) ? 'selected' : ''; ?>>SCQ</option>
										<option value="6" <?php echo ($row['type'] == 6) ? 'selected' : ''; ?>>MCQ</option> -->
									</select>
								</div>

								<div class="form-group col-md-2 mb-2">
									<label>Page Number</label>
									<input type="text" step="0.1" class="form-control col-md-12" name="page_number" placeholder="Page Number" value="<?php echo $row['page_number'] ?>" />
								</div>
								<?php if ($sub_page_main != 0) { ?>
									<div class="form-group col-md-2 mb-2">
										<label>Return Page</label>
										<input type="text" step="0.1" class="form-control col-md-12" name="sub_page_main" placeholder="Return Page" value="<?php echo $row['sub_page_main'] ?>" />
									</div>
								<?php } else {
									echo '<input type="hidden" name="sub_page_main" value="0" />';
								} ?>
								<div class="form-group col-md-2 mb-2">
									<label>Status</label>
									<select name="status" class="form-control">
										<option value="1" <?php echo ($row['status'] == 1) ? 'selected' : ''; ?>>Editing</option><!-- 
										<option value="2" <?php echo ($row['status'] == 2) ? 'selected' : ''; ?>>CE Rev</option>
										<option value="3" <?php echo ($row['status'] == 3) ? 'selected' : ''; ?>>CE Fix</option>
										<option value="4" <?php echo ($row['status'] == 4) ? 'selected' : ''; ?>>Client Rev</option>
										<option value="5" <?php echo ($row['status'] == 5) ? 'selected' : ''; ?>>Client Fix</option> -->
										<option value="6" <?php echo ($row['status'] == 6) ? 'selected' : ''; ?>>Ready for Dev</option>
										<option value="0" <?php echo ($row['status'] == 0) ? 'selected' : ''; ?>>Delete</option>
									</select>
								</div>
								<div class="form-group col-md-2 mt-3 mb-2">
									<?php if (isset($coursevalidation)) : ?>
										<div class=col-12 col-sm-4>
											<div class="alert alert-white" role="alert">
												<?= $coursevalidation->listErrors() ?>
											</div>
										</div>
									<?php endif; ?>
									<input type="hidden" name="page_id" value="<?php echo $row['page_id']; ?>">
									<!-- <input type="hidden" name="status" value="1"> -->
									<button type="submit" class="btn btn-outline-warning waves-effect btn-sm waves-light mb-3" id="submitButton">
										Update
									</button>
								</div>

						</form>
					</div>
				</div>
			</div>
		</div>
	</div>

	<?php
	if ($row['type'] != 5 && $row['type'] != 6) { ?>

		<div id="full-width-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="fullWidthModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-full-width modal-dialog modal-full-width-scrollable" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title" id="fullWidthModalLabel">Description</h4>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<form class="form-horizontal" action="<?php echo base_url('SCORM/course_builder/Scorm_course_pages/add_content') ?>" method="POST"><?= csrf_field() ?>
							<div class="row">
								<div class="col-md-6">
									<div class="mb-1">
										<label for="inputEmail3" class="col-form-label">Audio</label>
										<div>
											<textarea class="ckeditor" name="audio" required></textarea>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="mb-1">
										<label for="inputEmail3" class="col-form-label">On Screen Text</label>
										<div>
											<textarea class="ckeditor" name="on_screen_text" required></textarea>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<div class="mb-1">
										<label for="inputEmail3" class="col-form-label">Production Notes</label>
										<div>
											<textarea class="ckeditor" name="production_notes" required></textarea>
										</div>
									</div>
								</div>
							</div>
							<div class="text-center">
								<input type="number" class="form-control col-md-12 mb-1" name="sequence"  min="0" placeholder="Sequence" value="" />

								<?php if (isset($coursevalidation)) : ?>
									<div class=col-12 col-sm-4>
										<div class="alert alert-white" role="alert">
											<?= $coursevalidation->listErrors() ?>
										</div>
									</div>
								<?php endif; ?>
								<input type="hidden" name="page_id" value="<?php echo $page_id; ?>">
								<button type="submit" class="btn btn-outline-primary waves-effect btn-sm waves-light mb-3">
									Submit
								</button>
							</div>
							<!-- </div> -->
						</form>
					</div>
					<!-- <div class="modal-footer"> -->
						<!-- <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button> -->
					<!-- </div> -->
				</div><!-- /.modal-content -->
			</div><!-- /.modal-dialog modal-full-width -->
		</div><!-- /.modal -->
		<div class="row">
			<div class="col-6 col-md-6 col-lg-12">
				<div class="card">

					<div class="card-body">
						<div style="text-align: right;"><button data-bs-toggle="modal" data-bs-target="#full-width-modal" class="btn btn-outline-primary btn-xs rounded-pill waves-effect btn-sm waves-light mb-3"><Span class="mdi mdi-plus-circle"></Span> Add Content</button></div><br />

						<table class="table dt-responsive nowrap w-100">
							<thead>
								<tr>
									<th width=5%>#</th>
									<th>Audio</th>
									<th>On Screen</th>
									<th>Notes</th>
									<th>Edit</th>
									<th>Delete</th>
							</thead>
							<tbody>

								<?php $j = 0;
								foreach ($page_content as $eachpagesDetails) {
									$j = $j + 1;
								?>
									<tr>
										<td><?php echo $eachpagesDetails['page_sequense'] ?></td>
										<td><?php echo $eachpagesDetails['audio'] ?></td>
										<td><?php echo $eachpagesDetails['on_screen_text'] ?></td>
										<td><?php echo $eachpagesDetails['production_notes'] ?></td>
										<td>

											<button data-bs-toggle="modal" data-bs-target="#full-width-modal-<?php echo  $j; ?>" class="btn btn-outline-warning waves-effect btn-xs waves-light"><span class="mdi mdi-pencil-outline"></span> Edit</button>
											<!-- <button type="submit" class="btn btn-outline-primary waves-effect btn-xs waves-light"><span class="fe-settings"></span></button> -->
											<!-- </form> -->
										</td>
										<td>
											<form class="form-horizontal mb-2" action="<?php echo base_url('SCORM/course_builder/Scorm_course_pages/page_del_content') ?>" method="POST"><?= csrf_field() ?>
												<input type="hidden" name="scourse_id" value="<?php echo $course_id; ?>">
												<input type="hidden" name="page_id" value="<?php echo $page_id; ?>">
												<input type="hidden" name="page_content_id" value="<?php echo $eachpagesDetails['page_content_id']; ?>">
												<button type="submit" class="btn btn-outline-danger waves-effect btn-xs waves-light"><span class="mdi mdi-trash-can-outline"></span> Delete</button>
											</form>
										</td>
									</tr>
									<div id="full-width-modal-<?php echo  $j; ?>" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="fullWidthModalLabel-<?php echo  $j; ?>" aria-hidden="true">
										<div class="modal-dialog modal-full-width">
											<div class="modal-content">
												<div class="modal-header">
													<h4 class="modal-title" id="fullWidthModalLabel-<?php echo  $j; ?>">Description</h4>
													<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
												</div>
												<div class="modal-body">
													<form class="form-horizontal" action="<?php echo base_url('SCORM/course_builder/Scorm_course_pages/update_content') ?>" method="POST"><?= csrf_field() ?>
														<div class="row">
															<div class="col-md-6">
																<div class="mb-1">
																	<label for="inputEmail3" class="col-form-label">Audio</label>
																	<div>
																		<textarea class="ckeditor" name="audio" value="><?php echo $eachpagesDetails['audio'] ?>" required><?php echo $eachpagesDetails['audio'] ?></textarea>
																	</div>
																</div>
															</div>
															<div class="col-md-6">
																<div class="mb-1">
																	<label for="inputEmail3" class="col-form-label">On Screen Text</label>
																	<div>
																		<textarea class="ckeditor" name="on_screen_text" value="<?php echo $eachpagesDetails['on_screen_text'] ?>" required><?php echo $eachpagesDetails['on_screen_text'] ?></textarea>
																	</div>
																</div>
															</div>
														</div>
														<div class="row">
															<div class="col-md-12">
																<div class="mb-1">
																	<label for="inputEmail3" class="col-form-label">Production Notes</label>
																	<div>
																		<textarea class="ckeditor" name="production_notes" value="<?php echo $eachpagesDetails['production_notes'] ?>" required><?php echo $eachpagesDetails['production_notes'] ?></textarea>
																	</div>
																</div>
															</div>
														</div>
														<div class="text-center">
															<input type="number" class="form-control col-md-12 mb-1" name="sequence" min="0" placeholder="Sequence" value="<?php echo $eachpagesDetails['page_sequense'] ?>" />

															<?php if (isset($coursevalidation)) : ?>
																<div class=col-12 col-sm-4>
																	<div class="alert alert-white" role="alert">
																		<?= $coursevalidation->listErrors() ?>
																	</div>
																</div>
															<?php endif; ?>
															<!-- <input type="hidden" name="page_id" value="<?php echo $page_id; ?>"> -->
															<input type="hidden" name="page_id" value="<?php echo $eachpagesDetails['page_id'] ?>">
															<input type="hidden" name="page_content_id" value="<?php echo $eachpagesDetails['page_content_id'] ?>">
															<button type="submit" class="btn btn-outline-warning waves-effect btn-sm waves-light">
																Update
															</button>
														</div>
														<!-- </div> -->
													</form>
												</div>
												<!-- <div class="modal-footer"> -->
													<!-- <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button> -->
												<!-- </div> -->
											</div><!-- /.modal-content -->
										</div><!-- /.modal-dialog modal-full-width -->
									</div><!-- /.modal -->

								<?php
								}
								?>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>

	<?php } ?>
	<?php if ($row['type'] == 5 || $row['type'] == 6) { ?>
		<div class="col-md-12">
			<div class="card">
				<div class="card-body">
					<div class="x_panel">
						<form class="form-horizontal" action="<?php echo base_url($form_link_add) ?>" method="POST"><?= csrf_field() ?>
							<div class="row">
								<div class="col-md-12">
									<label>Question</label>
									<input type="text" class="form-control col-md-12" name="question" placeholder="Question" required />
								</div>
							</div><br />
							<div class="row">
								<div class="col-md-4">
									<label>Correct feedback</label>
									<input type="text" class="form-control col-md-12" name="correct" placeholder="Correct" />
								</div>
								<div class="col-md-4">
									<label>Incorrect feedback</label>
									<input type="text" class="form-control col-md-12" name="incorrect" placeholder="Incorrect" />
								</div>
								<div class="col-md-4">
									<label>No Attempts feedback</label>
									<input type="text" class="form-control col-md-12" name="noAttempts" placeholder="No Attempts" />
								</div>
							</div><br />
							<?php if ($row['type'] == 4) { ?>
								<div class="row">
									<div class="col-md-4">
										<label>Category</label>
										<select name="category" class="form-control col-md-12">
											<?php foreach ($allcategories as $eachcategories) { ?>
												<option value="<?= $eachcategories['sc_mcid'] ?>"><?= $eachcategories['description'] ?></option>
											<?php
											} ?>
										</select>
									</div>
									<div class="col-md-4">
										<label>Type</label>
										<select class="form-select col-md-12" name="quiz_type">
											<?php foreach ($AssessmentQuestionType as $quiz_type) {
												echo '<option value="' . $quiz_type['id_d'] . '">' . $quiz_type['name'] . '</option>';
											} ?>
										</select>
									</div>
								</div><br />
							<?php } ?>
							<div class="row">
								<div class="col-md-12">
									<?php if (isset($coursevalidation)) : ?>
										<div class=col-12 col-sm-4>
											<div class="alert alert-danger" role="alert">
												<?= $coursevalidation->listErrors() ?>
											</div>
										</div>
									<?php endif; ?>
									<input type="hidden" name="scourse_id" value="<?php echo $course_id; ?>">
									<input type="hidden" name="page_id" value="<?php echo $page_id; ?>">
									<input type="hidden" name="type" value="<?php echo $row['type']; ?>">
									<button type="submit" class="btn btn-primary btn-sm col-md-4">
										<i class="ace-icon fa fa-key bigger-110"></i> Add New Question
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>

	<?php } ?>
</div>
</div>