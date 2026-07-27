<div class="row">
	<div class="col-12">
		<div class="page-title-box">
			<div class="page-title-right">
				<ol class="breadcrumb m-0">
					<li class="breadcrumb-item"><a href="<?php echo base_url('SCORM/course_builder/Editor'); ?>">Course
							Builder</a></li>
				</ol>
			</div>
			<h4 class="page-title">SCORM Export & Settings</h4>
		</div>
	</div>
</div>
<div class="row">
	<ul class="nav nav-pills nav-fill navtab-bg">
		<li class="nav-item">
			<a href="#scormexport" data-bs-toggle="tab" aria-expanded="true" class="nav-link <?php if ($tab == 1)
																									echo "active"; ?>">
				SCORM Export
			</a>
		</li>
		<li class="nav-item">
			<a href="#settings" data-bs-toggle="tab" aria-expanded="false" class="nav-link <?php if ($tab == 2)
																								echo "active"; ?>">
				Settings
			</a>
		</li>
		<li class="nav-item">
			<a href="#Reference" data-bs-toggle="tab" aria-expanded="false" class="nav-link <?php if ($tab == 3)
																								echo "active"; ?>">
				Upload Reference PDF
			</a>
		</li>
	</ul>

	<div class="tab-content">
		<div class="tab-pane <?php if ($tab == 1)
									echo "show active"; ?>" id="scormexport">
			<div class="card">
				<div class="card-body">
					<div class="row">

						<?php if ($getAllpdfFileOwner[0]['mode'] != '2') {
							echo ' <div class="btn btn-outline-danger btn square-pill waves-effect waves-light" >';
							echo 'SCORM package export is currently unavailable as the project is still under development. Please try again once the development is complete.';
							echo '</div>';
						} else { ?>

							<div class="col-md-8">
								<?php
								echo '<table class="table  table-sm">';
								echo '<tr><th>Folder Name</th><th>Size</th><th>Export On</th><th>Version</th><th>Download</th><th>Delete</th></tr>';
								$baseloc = '';
								$base = base_url();
								if ($base == 'http://localhost/Dochek_V3/Dochek_V3') {
									$baseloc = '/Users/pchandran/Sites/dochek_v3/Dochek_V3/';
								}
								if ($base == 'http://localhost/projects_dochek') {
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
								if ($base == 'http://localhost/DOCHEK') {
									$baseloc = 'C:/wamp64/www/DOCHEK';
								}
								if ($base == 'http://172.16.2.218/DOCHEK/') {
									$baseloc = '/var/www/DOCHEK/';
								}
								if ($base == 'http://172.16.2.218/DOCHEK/') {
									$baseloc = '/var/www/DOCHEK/';
								}
								$folderloc = $baseloc . 'assets/assets/uploads/SCORM_course_document/' . $scourse_id . '/';
								//  print_r($fileloc);
								if (is_dir($folderloc)) {
									$files2 = scandir($folderloc, SCANDIR_SORT_DESCENDING);
									$sno = 0;
									$course_name = htmlspecialchars($getAllpdfFileOwner[0]['course_name'], ENT_QUOTES, 'UTF-8');
									$decoded_course_name = html_entity_decode($course_name, ENT_QUOTES, 'UTF-8');
									$courses_name = preg_replace('/[^A-Za-z0-9 _.\-]/u', ' ', $decoded_course_name);

									$courses_name = trim($courses_name, " _-");
									$courses_name = preg_replace('/[\s\-]+/', ' ', $courses_name);

									// $courses_name = preg_replace('/[+\-*\/\?]/', '', $getAllpdfFileOwner[0]['course_name']);
									// $courses_name = preg_replace('/\s+/', ' ', $courses_name);
									// //$courses_name = preg_replace('/["\']/', '', $getAllpdfFileOwner[0]['course_name']);

									$filename = $baseloc . 'assets/assets/uploads/SCORM_course_document/' . $scourse_id . '/' . $courses_name . '.zip';
									// print_r(rawurlencode($course_name));
									if (file_exists($filename)) {
										// print_r($filename);
										foreach ($files2 as $value) {
											if ($value == $courses_name . '.zip') {
												echo '<tr><td>';
												echo $value;
												echo '</td><td>';

												// File Size
												$file_size_bytes = filesize($filename);
												// function formatSizeUnits($bytes)
												// {
												// 	if ($bytes >= 1073741824) {
												// 		$bytes = number_format($bytes / 1073741824, 2) . ' GB';
												// 	} elseif ($bytes >= 1048576) {
												// 		$bytes = number_format($bytes / 1048576, 2) . ' MB';
												// 	} elseif ($bytes >= 1024) {
												// 		$bytes = number_format($bytes / 1024, 2) . ' KB';
												// 	} elseif ($bytes > 1) {
												// 		$bytes = $bytes . ' bytes';
												// 	} elseif ($bytes == 1) {
												// 		$bytes = $bytes . ' byte';
												// 	} else {
												// 		$bytes = '0 bytes';
												// 	}

												// 	return $bytes;
												// }

												function formatSizeExact($bytes)
												{
													if ($bytes >= 1048576) {
														return sprintf("%.2f MB", $bytes / 1048576);
													} elseif ($bytes >= 1024) {
														return sprintf("%.2f KB", $bytes / 1024);
													} else {
														return $bytes . ' bytes';
													}
												}


												$file_size_bytes = filesize($filename);
												echo formatSizeExact($file_size_bytes);


												echo '</td><td>';

												// File Creation Date
												$file_creation_date = filemtime($filename);
												echo date('Y-m-d H:i:s', $file_creation_date);

												echo '</td><td>';
												echo 'SCORM 1.2';
												echo '</td><td>';
								?>
												<a href="<?php echo base_url('assets/assets/uploads/SCORM_course_document/' . $scourse_id . '/' . htmlspecialchars($courses_name, ENT_QUOTES, 'UTF-8') . '.zip'); ?>"
													class="btn btn-outline-primary waves-effect btn-xs waves-light" title="Download"><span class="fa fa-download"></span></a>
												<?php
												echo '</td><td>';
												?>
												<button type="submit" class="btn btn-outline-primary waves-effect btn-xs waves-light"
													onclick="downloadAndDelete('<?php echo $scourse_id; ?>', '<?php echo ($courses_name); ?>')">
													<span class="mdi mdi-trash-can-outline"></span>
												</button>
								<?php
												echo '</td></tr>';
											}
										}
									} else {
										echo '<td>No Files</td><td></td><td></td><td></td><td></td><td></td>';
									}
								} else {
									echo '<td>No Files</td><td></td><td></td><td></td><td></td><td></td>';
								}
								echo '</table>'; ?>

							</div>
							<div class="col-md-4">
								<div class="form-row">
									<form class="form-horizontal2" enctype="multipart/form-data" action=<?php echo base_url('SCORM/course_builder/Scorm_course_pages/exportCoursePackage'); ?>
										method="post" id="submitForm"><?= csrf_field() ?>
										<div class="form-group col-md-12 mb-2">
											<label>Identifier</label>
											<input class="form-control" name="Identifier" type="text"
												value="<?php echo 'DCK' . preg_replace('/[^a-zA-Z0-9]/', '', $getAllpdfFileOwner[0]['createdon']); ?>"
												required pattern="[A-Za-z0-9]+"
												title="Only alphanumeric characters allowed (no spaces or special characters)"
												oninput="this.value = this.value.replace(/[^a-zA-Z0-9]/g, '')" />
										</div>
										<div class="form-group col-md-12 mb-2">
											<label>LMS Reporting</label>
											<select name="lmsStatus" class="form-control">
												<option value="Passed/Failed">Passed/Failed</option>
												<option value="Passed/Incomplete">Passed/Incomplete</option>
												<option value="Completed/Incomplete">Completed/Incomplete</option>
												<option value="Completed/Failed">Completed/Failed</option>
											</select>
										</div>
										<div class="form-group col-md-12 mb-2">
											<label>SCORM Version</label>
											<select name="theme" class="form-control">
												<option value="1">SCORM 1.2</option>
												<!-- <option value="2">SCORM 2004</option> -->
											</select>
										</div>
										<div class="form-group col-md-12 mb-2">
											<input type="hidden" name="scourse_id" value="<?php echo $scourse_id ?>">
											<input type="hidden" name="tab" value="1">
											<input type="hidden" name="returnUrl" value="1">
											<button type="submit"
												class="btn btn-outline-primary waves-effect btn-sm waves-light form-control"
												id="submitButton">Create Export File</button>
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
						<?php } ?>
					</div>
				</div>
			</div>
		</div>


		<div class="tab-pane <?php if ($tab == 2)
									echo "show active"; ?>" id="settings">
			<div class="card">
				<div class="card-body">
					<div class="card">
						<div class="row">
							<div class="col-md-12">
								<P>NOTE : Respective Default Template will be display if you are not filled any fields
								</P>
								<?php //$assessment_export_sets = '';
								foreach ($assessment_export_sets as $x => $sets) {
									// print_r($x);
									// exit();
									if ($x == "62" || $x == "63" || $x == "74") {
										if (!empty($AssessmentSettings[$x])) {
											$item = $AssessmentSettings[$x][0]['value'];
											$s_id = $AssessmentSettings[$x][0]['s_id'];


								?>
											<form action="<?php echo base_url('Assessment/trainings/setting_data_update') ?>"
												method="POST"><?= csrf_field() ?>
												<input type="hidden" name="quiz_settings_type" value="<?php echo $x ?>">
												<input type="hidden" name="add_or_update" value="2">
												<input type="hidden" name="s_id" value="<?php echo $s_id; ?>">
												<input type="hidden" name="scourse_id"
													value="<?php echo isset($getAssessmentSettings[0]['scourse_id']) ? $getAssessmentSettings[0]['scourse_id'] : $scourse_id; ?>">
												<input type="hidden" name="page_id" value="0">
												<input type="hidden" name="returnUrl" value="1">
												<input type="hidden" name="tab" value="2">
												<input class="form-control" name="valid" type="hidden" />
												<div class="row">
													<?php if ($x == "62") { ?>
														<label><b>Default : </b>Free navigation</label><br>
													<?php } elseif ($x == "63") { ?>
														<label><b>Default : </b>Page level course completion</label><br>
													<?php } elseif ($x == "74") { ?>
														<label><b>Default : </b>Certificate Enable/Disable</label><br>
													<?php } ?>

													<div class="col-lg-3">
														<?php if ($item == 1) { ?>
															<input class="form-control" name="value" type="hidden" value="0" />
														<?php } else { ?>
															<input class="form-control" name="value" type="hidden" value="1" />

														<?php } ?>
													</div>
													<div class="col-lg-9">
														<?php if ($item == 1) { ?>
															<button type="submit" class="btn btn-success btn-sm"><i
																	class="fa fa-toggle-off"></i></button>
														<?php } else { ?>
															<button type="submit" class="btn btn-danger btn-sm"><i
																	class="fa fa-toggle-on"></i></button>
														<?php } ?>
													</div>
												</div><br />
											</form>
										<?php

										} else {

										?>
											<form action="<?php echo base_url('Assessment/trainings/setting_data_update') ?>"
												method="POST"><?= csrf_field() ?>
												<input type="hidden" name="quiz_settings_type" value=" <?php echo $x ?>">
												<input type="hidden" name="add_or_update" value="1">
												<input type="hidden" name="s_id" value="0">
												<input type="hidden" name="quiz_settings_id"
													value="<?php echo isset($getAssessmentSettings[0]['s_id']) ? $getAssessmentSettings[0]['s_id'] : ''; ?>">
												<input type="hidden" name="scourse_id"
													value="<?php echo isset($getAssessmentSettings[0]['scourse_id']) ? $getAssessmentSettings[0]['scourse_id'] : $scourse_id; ?>">
												<input type="hidden" name="page_id" value="0">
												<input type="hidden" name="returnUrl" value="1">
												<input type="hidden" name="tab" value="2">
												<div class="row">
													<div class="col-lg-3">

														<?php if ($x == "62") { ?>
															<label><b>Default : </b>Free navigation</label><br>
														<?php } elseif ($x == "63") { ?>
															<label><b>Default : </b>Page level course completion</label><br>
														<?php } elseif ($x == "74") { ?>
															<label><b>Default : </b>Certificate Enable/Disable</label><br>
														<?php } ?>
														<input class="form-control" name="valid" type="hidden" />

													</div>
													<?php if ($x == "74") { ?>
														<div class="col-lg-9">
															<input type="hidden" name="value" class="form-control" value="0" required />
															<button type="submit" class="btn btn-success btn-sm"><i
																	class="fa fa-toggle-on"></i></button>
														</div>
													<?php } else { ?>
														<div class="col-lg-9">
															<input type="hidden" name="value" class="form-control" value="1" required />
															<button type="submit" class="btn btn-danger btn-sm"><i
																	class="fa fa-toggle-off"></i></button>
														</div>
													<?php } ?>
												</div><br />
											</form>
										<?php }
									} else {

										if (!empty($AssessmentSettings[$x])) {
											$item = $AssessmentSettings[$x][0]['value'];
											$s_id = $AssessmentSettings[$x][0]['s_id'];


										?>

											<form action="<?php echo base_url('Assessment/trainings/setting_data_update') ?>"
												method="POST"><?= csrf_field() ?>
												<input type="hidden" name="quiz_settings_type" value="<?php echo $x ?>">
												<input type="hidden" name="add_or_update" value="2">
												<input type="hidden" name="s_id" value="<?php echo $s_id; ?>">
												<input type="hidden" name="scourse_id"
													value="<?php echo isset($getAssessmentSettings[0]['scourse_id']) ? $getAssessmentSettings[0]['scourse_id'] : $scourse_id; ?>">
												<input type="hidden" name="page_id" value="0">
												<input type="hidden" name="returnUrl" value="1">
												<input type="hidden" name="tab" value="2">
												<input class="form-control" name="valid" type="hidden" />
												<div class="row align-items-center">
													<?php if ($x == '64') { ?>
														<label><b>Default :</b> <?php echo $sets ?> (VTT Language)</label><br>
													<?php } elseif ($x == '65') { ?>
														<label><b>Default :</b> <?php echo $sets ?> (VTT Label)</label><br>
													<?php } else { ?>
														<label><b>Default :</b> <?php echo $sets ?></label><br>
													<?php } ?>
													<div class="col-lg-10">
														<input class="form-control" name="value" type="input"
															value="<?php echo isset($item) ? $item : $sets; ?>" />
													</div>
													<div class="col-lg-2 d-flex align-items-end">
														<button type="submit" class="btn btn-outline-warning w-0 py-0 rounded">
															Update</button>
													</div>
												</div><br />
											</form><br />
										<?php

										} else {

										?>
											<form action="<?php echo base_url('Assessment/trainings/setting_data_update') ?>"
												method="POST"><?= csrf_field() ?>
												<input type="hidden" name="quiz_settings_type" value=" <?php echo $x ?>">
												<input type="hidden" name="add_or_update" value="1">
												<input type="hidden" name="s_id" value="0">
												<input type="hidden" name="quiz_settings_id"
													value="<?php echo isset($getAssessmentSettings[0]['s_id']) ? $getAssessmentSettings[0]['s_id'] : ''; ?>">
												<input type="hidden" name="scourse_id"
													value="<?php echo isset($getAssessmentSettings[0]['scourse_id']) ? $getAssessmentSettings[0]['scourse_id'] : $scourse_id; ?>">
												<input type="hidden" name="page_id" value="0">
												<input type="hidden" name="returnUrl" value="1">
												<input type="hidden" name="tab" value="2">
												<div class="row align-items-center">
													<div class="col-lg-10">
														<?php if ($x == '64') { ?>
															<label><strong>Default:</strong> <?php echo $sets ?> (VTT Language)</label>
														<?php } elseif ($x == '65') { ?>
															<label><strong>Default:</strong> <?php echo $sets ?> (VTT Label)</label>
														<?php } else { ?>
															<label><strong>Default:</strong> <?php echo $sets ?></label>
														<?php } ?>
														<input name="value" class="form-control" value="" required />
													</div>

													<div class="col-lg-2 d-flex align-items-end">
														<button type="submit" class="btn btn-outline-primary w-0 py-0 rounded">
															Add
														</button>
													</div>
												</div>


											</form><br />
								<?php
										}
									}
								}

								?>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="tab-pane <?php if ($tab == 3) echo "show active"; ?>" id="Reference">
			<div class="card">
				<div class="card-body">
					<div class="card">
						<div class="row">
							<div class="col-md-12">
								<!-- <h5 class="mb-3 text-uppercase bg-light p-2"><?= lang('UI_Text.Reference') ?></h5> -->
								<?php
								$folderloc = $baseloc . 'assets/assets/uploads/SCORM_course_document/' . $scourse_id . '/' . $row['createdon'] . '/assets/PDF';
								// print_r($folderloc);
								if (is_dir($folderloc)) {
								?>
									<div class="col-md-6">
										<div class="table-responsive">
											<table class="table table-borderless mb-0">
												<thead class="table-light">
													<tr>
														<th>#</th>
														<th><?= lang('UI_Text.Folder') ?></th>
														<th><?= lang('UI_Text.Created') ?></th>
														<th><?= lang('UI_Text.Delete') ?></th>
													</tr>
												</thead>
												<tbody>
													<?php
													$files2 = scandir($folderloc, SCANDIR_SORT_DESCENDING);
													$sno = 0;

													foreach ($files2 as $key => $value) {
														if (strlen($value) > 3) {

															$dontshow = 0;
															$file_parts = pathinfo($value);
															if ($file_parts['extension'] != 'DS_Store') {
																$sno++;
																echo '<tr><td>';
																echo $sno;
																echo '</td><td>';
																echo $value;

																echo '</td><td>';
																$file_creation_date = filectime($folderloc . '/' . $value);
																echo date('Y-m-d H:i:s', $file_creation_date);
																echo '</td><td>';
																if ($row['thumbnail'] != $value) {
													?>
																	<form class="form-horizontal"
																		action="<?php echo base_url('SCORM/Scorm_courses/del_file'); ?>"
																		method="POST"><?= csrf_field() ?>
																		<input type="hidden" name="fileloc"
																			value="<?php echo $folderloc . '/' . $value; ?>">
																		<input type="hidden" name="foldername" value="<?php echo $value; ?>">
																		<input type="hidden" name="scourse_id"
																			value="<?php echo $scourse_id ?>">
																		<input type="hidden" name="tab" value="3">
																		<button type="submit" class="btn btn-outline-danger waves-effect btn-xs waves-light"
																			onclick="return confirm('<?php echo lang('Alert.Aler_003') ?>')"><span
																				class="mdi mdi-trash-can-outline"></span> Delete</button>
																	</form>
												<?php
																}

																echo '</td><tr>';
															}
														}
													}

													echo '</tbody></table></div><hr>';
												}
												?>
										</div>
									</div>

									<div class="col-md-6">
										<form class="form-horizontal2" enctype="multipart/form-data" action=<?php echo base_url('SCORM/scorm_courses/uploadpdf'); ?> method="post" id="submitForm"><?= csrf_field() ?>
											<label><?= lang('UI_Text.Description') ?></label>
											<div class="mb-3">
												<input type="input" name="description" class="form-control"
													required />
											</div>
											<div class="mb-3">
												<input type="file" name="file" accept="application/pdf" required />
											</div>
											<div class="mb-3">
												<input type="hidden" name="tab" value="3">
												<input type="hidden" name="scourse_id"
													value="<?php echo $scourse_id ?>">
												<input type="hidden" name="createdon"
													value="<?php echo $row['createdon'] ?>">
												<button type="submit"
													class="btn btn-outline-success waves-effect btn-sm waves-light mb-3"
													id="submitButton"><?= lang('Buttons.Upload_PDF_Document') ?></button>
											</div>
											<?php if (isset($pdfvalidation)): ?>
												<div class="form-group col-md-12">
													<div class="alert alert-danger" role="alert">
														<?= $pdfvalidation->listErrors() ?>
													</div>
												</div>
											<?php endif; ?>
										</form>
										<?php
										?>

									</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

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
<!-- In your view file -->

<script>
	function downloadAndDelete(courseId, zipFileName) {
		// AJAX request to the PHP script for deleting the zip file
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "<?php echo base_url('SCORM/course_builder/Scorm_course_pages/delete_zip'); ?>/" + courseId + "/" + zipFileName, true);
		xhr.onload = function() {
			if (xhr.status === 200) {
				// Reload the page after successful deletion
				location.reload();
			}
		};
		xhr.send();

	}
</script>