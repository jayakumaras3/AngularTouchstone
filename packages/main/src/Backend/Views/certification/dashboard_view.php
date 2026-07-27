<?php $accessmenu = session()->get('accessmenu');
$arrayaccessmenu  = array_map('intval', explode(',', $accessmenu)); ?><div class="row">
	<div class="row">
		<div class="col-12">
			<div class="page-title-box">
				<div class="page-title-right">
					<ol class="breadcrumb m-0">
						<?php
						$userlevel = session()->get('userlevel');
						$arrayuserlevel = explode(',', $userlevel);
						//print_r($arrayuserlevel);
						if (in_array('44', $arrayuserlevel) || in_array('5', $arrayuserlevel)) {
						?>
							<li class="nav-item ms-auto">
								<button type="button"
									class="btn btn-outline-primary btn-xs rounded-pill waves-effect waves-light float-end"
									data-bs-toggle="modal"
									data-bs-target="#createCertificateModal">
									<i class="mdi mdi-plus-circle"></i> <?= lang('Buttons.Create_New_Certificate') ?>
								</button>
								<div class="modal fade" id="createCertificateModal" tabindex="-1" aria-hidden="true">
									<div class="modal-dialog modal-lg modal-dialog-centered">
										<div class="modal-content">

											<div class="modal-header">
												<h5 class="modal-title"><?= lang('Buttons.Create_New_Certificate') ?></h5>
												<button type="button" class="btn-close" data-bs-dismiss="modal"></button>
											</div>

											<div class="modal-body">
												<form action="<?php echo base_url('Certification/Dashboard/add_new_certificate') ?>" method="POST"><?= csrf_field() ?>
													<?= csrf_field() ?>
													<div class="mb-3">
														<label class="form-label"><?= lang('UI_Text.Certificate_Name') ?><span class="text-danger">*</span></label>
														<input type="text" name="name" class="form-control" required>
													</div>

													<div class="mb-3">
														<label class="form-label"><?= lang('UI_Text.Description') ?></label>
														<textarea class="ckeditor" name="description"></textarea>
													</div>
													<div class="mb-3">
														<label class="form-label"><?= lang('UI_Text.Duration') ?><span class="text-danger">*</span></label>
														<input type="number" name="duration" class="form-control" required>
													</div>

													<div class="mb-3">
														<label class="form-label"><?= lang('UI_Text.Certificate_Type') ?><span class="text-danger">*</span></label>
														<select class="form-select" name="type">
															<option value="4"><?= lang('UI_Text.Certification') ?></option>
															<option value="3"><?= lang('UI_Text.Courses') ?></option>
															<option value="2"><?= lang('UI_Text.Learning_Plan') ?></option>
															<?php if ($client_id == 1) { ?>
																<option value="1"><?= lang('UI_Text.Marketplace') ?></option>
															<?php } ?>
														</select>
													</div>

													<div class="text-center">
														<!-- <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button> -->
														<button type="submit" class="btn btn-outline-primary btn-xs waves-effect waves-light"><?= lang('Buttons.Submit') ?></button>
													</div>

												</form>
											</div>

										</div>
									</div>
								</div>




							</li>

						<?php } ?>
				</div>
				<h4 class="page-title">Certificate Dashboard</h4>
			</div>
		</div>
	</div>

</div>

<?php if (!empty($get_all_certificates)) { ?>
	<div class="row">
		<div class="col-12">
			<div class="card">
				<div class="card-body">
					<div class="table-responsive">
						<table id="alternative-page-datatable" class="table table-sm table-striped">
							<thead>
								<tr>
									<th>#</th>
									<th><?= lang('UI_Text.Certificate_Name') ?></th>

									<?php if (in_array('44', $arrayuserlevel) || in_array('5', $arrayuserlevel)) { ?>
										<th><?= lang('UI_Text.Certificate_Type') ?></th>
										<th><?= lang('UI_Text.Certificate_Status') ?></th>
									<?php } ?>
									<th><?= lang('UI_Text.Created_By') ?></th>
									<th><?= lang('UI_Text.Created_On') ?></th>
										<th><?= lang('UI_Text.Edit') ?></th>
									<th><?= lang('UI_Text.Action') ?></th>


								</tr>
							</thead>
							<tbody>
								<?php
								$j = 0;
								foreach ($get_all_certificates as $all_cert) {
									$j++;
									$type = $all_cert['type'];
									$typeval = '';
									switch ($type) {
										case 4:
											$typeval = lang('UI_Text.Certification');
											break;
										case 3:
											$typeval = lang('UI_Text.Courses');
											break;
										case 2:
											$typeval = lang('UI_Text.Learning_Plan');
											break;
										case 1:
											$typeval = lang('UI_Text.Marketplace');
											break;
									}
									$Assigntypeval = '';
									switch ($type) {
										case 4:
											$Assigntypeval = lang('UI_Text.Learning_Plan');
											break;
										case 3:
											$Assigntypeval = lang('UI_Text.Courses');
											break;
										case 2:
											$Assigntypeval = lang('UI_Text.Learning_Plan');
											break;
										case 1:
											$Assigntypeval = lang('UI_Text.Marketplace');
											break;
									}
								?>
									<tr>
										<td><?php echo $j; ?></td>
										<td><?php echo $all_cert['name']; ?></td>

										<?php if (in_array('44', $arrayuserlevel) || in_array('5', $arrayuserlevel)) {
										?>
											<td><?php
												echo $typeval;
												?>
											</td>
											<td><?php $status = $all_cert['status'];
												switch ($status) {
													case 1:
														echo '<span style="color:green">' . lang('UI_Text.Active') . '</span>';
														break;
													case 0:
														echo '<span style="color:red">' . lang('UI_Text.In_Active') . '</span>';
														break;
												}
												?>
											</td>

										<?php } ?>
										<td><?php echo isset($all_cert['createdby']) ? $all_cert['createdby'] : ''; ?></td>
										<td><?php echo ($all_cert['last_updated_on'] != 0) ? date('m-d-Y', $all_cert['last_updated_on']) : ''; ?></td>

										<?php if (in_array('44', $arrayuserlevel) || in_array('5', $arrayuserlevel)) { ?>
											<td>
												<form action="<?php echo base_url('Certification/Dashboard/Edit_certificate') ?>" method="POST"><?= csrf_field() ?>
													<?= csrf_field() ?>
													<input type="hidden" name="certificate_id" value="<?php echo $all_cert['cert_id']; ?>">

													<button type="submit" class="btn btn-outline-warning waves-effect btn-xs waves-light "><i class="mdi mdi-pencil-outline"></i> <?= lang('Buttons.Edit') ?></button>
													</button>
												</form>
											</td>
											<td>
												<?php if ($status == 1) { ?>
													<form action="<?php echo base_url('Certification/Dashboard/Assign_certificate') ?>" method="POST"><?= csrf_field() ?>
														<input type="hidden" name="certificate_id" value="<?php echo $all_cert['cert_id']; ?>">

														<button type="submit" class="btn btn-outline-danger waves-effect btn-xs waves-light "><i class="mdi mdi-book-education-outline"></i> <?php echo $Assigntypeval ?></button>
													</form>
												<?php } ?>
											</td>
											<td>
												<?php if ($type == 4) { ?>
													<!-- <form action="<?php echo base_url('Certification/Dashboard/Assign_user_to_certification_view') ?>" method="POST"><?= csrf_field() ?>
														<input type="hidden" name="certificate_id" value="<?php echo $all_cert['cert_id']; ?>">
														<input type="hidden" name="type" value="<?php echo $type; ?>">
														<button type="submit" class="btn btn-outline-primary waves-effect btn-xs waves-light "><i class="mdi mdi-account-outline"></i> <?= lang('Buttons.Add') ?></button>
													</form> -->
												<?php } ?>
											</td>
										<?php } ?>







									</tr>
								<?php

								}
								?>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
<?php } else { ?>
	<div class="persistent-warning">
		<div class="danger-text">
			<?php echo lang('UI_Text.No_Certification_Assigned'); ?>
		</div>
	</div>
<?php } ?>