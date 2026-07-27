<?php
$userlevel = session('userlevel');
$id_user = session('id_user');
$arrayuserlevel  = array_map('intval', explode(',', $userlevel) ?? '');
$month = isset($month) ? $month : date('m');
$year = isset($year) ? $year : date('Y');
?>
<div class="row">
    <div class="col-12">
        <div class="page-title-box">
            <div class="page-title-right">
                <button type="button" class="btn btn-outline-primary btn-xs rounded-pill waves-effect waves-light float-end" data-bs-toggle="modal" data-bs-target="#bs-example-modal-lg"><i class="mdi mdi-plus-circle"></i> Add New Claim </button>
            </div>
            <h4 class="page-title">Claims (<?php echo $month . '/' . $year; ?>)</h4>
        </div>
    </div>
</div>
<div class="modal fade" id="bs-example-modal-lg" tabindex="-1" aria-labelledby="myLargeModalLabel" aria-hidden="true" style="display: none;">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="myLargeModalLabel">Create New Expense</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form class="form-horizontal" action="<?php echo base_url('etrack/claims/add_new_claim'); ?>" method="POST" id="submitForm"><?= csrf_field() ?>
                    <div class="row">
                        <div class="col-md-4">
                            <label for="inputEmail3" class="col-12 col-xl-12  col-form-label">Vendor Name</label>
                            <div class="col-12 col-xl-12">
                                <input type="text" name="vendor_name" class="form-control" required>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label for="inputEmail3" class="col-12 col-xl-12  col-form-label">Currency</label>
                            <div class="col-12 col-xl-12">
                                <select name="currency" class="form-control" required>
                                    <option value="1" SELECTED>USD</option>
                                    <option value="2">INR</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label for="inputEmail3" class="col-12 col-xl-12  col-form-label">Amount</label>
                            <div class="col-12 col-xl-12">
                                <input type="number" name="amount" class="form-control" value="" required>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <label for="inputEmail3" class="col-12 col-xl-12  col-form-label">Payment Mode</label>
                            <div class="col-12 col-xl-12">
                                <select name="payment_mode" class="form-control" required>
                                    <option value="1">Personal CC</option>
                                    <option value="2">Shrikant CC</option>
                                    <option value="3">Frank CC</option>
                                    <option value="4">Pramod CC</option>
                                    <option value="5">Office</option>
                                    <option value="6">Cash</option>
                                    <option value="7">Online</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label for="inputEmail3" class="col-12 col-xl-12  col-form-label">Claim Date</label>
                            <div class="col-12 col-xl-12">
                                <input id="start_date" name="claim_date" class="date-picker form-control" placeholder="yyyy-mm-dd" type="text" onfocus="this.type='date'" onclick="this.type='date'" onblur="this.type='text'" onmouseout="timeFunctionLong(this)" value="" required>
                                <script>
                                    function timeFunctionLong(input) {
                                        setTimeout(function() {
                                            input.type = 'text';
                                        }, 60000);
                                    }
                                </script>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label for="inputEmail3" class="col-12 col-xl-12  col-form-label">Expense Head <span style="font-size: 10px; color: #f54f60;">If in doubt contact Finance.</span></label>
                            <div class="col-12 col-xl-12">
                                <select name="expense_head" id="expense_head" class="form-select" required>
                                    <option value="">Select Expense Head</option>
                                    <?php $expense_list = $expense_list ?? [];
                                    foreach ($expense_list as $key => $value) { ?>
                                        <option value="<?php echo $key ?>">** <?php echo $value ?></option>
                                    <?php } ?>
                                    <?php if (!empty($active_ucn)) {
                                        foreach ($active_ucn as $ucn) { ?>
                                            <option value="<?php echo $ucn['ucn_id'] ?>"><?php echo $ucn['name'] ?></option>
                                    <?php }
                                    } ?>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <label for="inputEmail3" class="col-12 col-xl-12  col-form-label">Description</label>
                            <div class="col-12 col-xl-12">
                                <textarea name="description" class="form-control" required></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="justify-content-end row mt-3">
                        <div class="col-12 col-xl-12">
                            <button type="submit" class="btn btn-outline-danger btn-xs waves-effect waves-light" id="submitButton">
                                Add New Expense
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-12">
        <div class="card">
            <div class="card-body">
                <form class="form-horizontal" action="<?php echo base_url('Etrack/claims'); ?>" method="POST" id="exportForm"><?= csrf_field() ?>
                    <div class="mb-2 row">
                        <label for="inputEmail3" class="col-12 col-xl-1  col-form-label">Month</label>
                        <div class="col-12 col-xl-2">
                            <select name="month" class="form-control" required>
                                <option value="">Select Month</option>
                                <option value="01">January</option>
                                <option value="02">February</option>
                                <option value="03">March</option>
                                <option value="04">April</option>
                                <option value="05">May</option>
                                <option value="06">June</option>
                                <option value="07">July</option>
                                <option value="08">August</option>
                                <option value="09">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                        </div>
                        <label for="inputEmail3" class="col-12 col-xl-1  col-form-label">Year</label>
                        <div class="col-12 col-xl-2">
                            <select name="year" class="form-control" required>
                                <option value="">Select Year</option>
                                <?php
                                $current_year = date('Y');
                                for ($i = $current_year; $i >= 2026; $i--) {
                                    echo '<option value="' . $i . '">' . $i . '</option>';
                                }
                                ?>
                            </select>
                        </div>
                        <div class="col-12 col-xl-2">
                            <button type="submit" class="btn btn-outline-success btn-xs waves-effect waves-light" id="exportButton">
                                View Claims
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-12">
        <div class="card">
            <div class="card-body">
                <table  class="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th class="center">#</th>
                            <th>Vendor</th>
                            <th>Claim By</th>
                            <th>Claim Date</th>
                            <th>Mode</th>
                            <th>USD</th>
                            <th>Expense Head</th>
                            <th>Status</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        $j = 0;
                        $my_claims = $my_claims ?? [];
                        foreach ($my_claims as $claimx) {
                            $j++;
                            echo '<tr><td>';
                            echo $j;
                            echo '</td><td>';
                            echo $claimx['vendor_name'];
                            echo '</td><td>';
                            echo $claimx['requested_by_name'] . ' ' . $claimx['requested_by_last_name'];
                            echo '</td><td>';
                            echo $claimx['requested_on'];
                            echo '</td><td>';
                            switch ($claimx['mode']) {
                                case 1:
                                    echo 'Personal CC';
                                    break;
                                case 2:
                                    echo 'Srikant CC';
                                    break;
                                case 3:
                                    echo 'Frank CC';
                                    break;
                                case 4:
                                    echo 'Pramod CC';
                                    break;
                                case 5:
                                    echo 'Office';
                                    break;
                                case 6:
                                    echo 'Cash';
                                    break;
                                case 7:
                                    echo 'Online';
                                    break;
                            }
                            echo '</td><td style="text-align:right">$ ';
                            echo number_format($claimx['claim_amount_usd']);
                            echo '</td><td>';
                            if ($claimx['expense_head'] > 9 && $claimx['expense_head'] < 50) {
                                echo '** ' . $expense_list[$claimx['expense_head']] ?? 'N/A';
                            } elseif ($claimx['expense_head'] > 50) {
                                echo $claimx['expense_head'] . ' - ' . $claimx['expense_head_name'];
                            } else {
                                echo 'N/A';
                            }

                            echo '</td><td>';
                            switch ($claimx['status']) {
                                case 1:
                                    echo 'New';
                                    break;
                                case 2:
                                    echo 'Submitted to PM';
                                    break;
                                case 3:
                                    echo 'PM Approved';
                                    break;
                                case 4:
                                    echo 'Submitted to PC';
                                    break;
                                case 5:
                                    echo 'Pramod Approved';
                                    break;
                                case 6:
                                    echo 'Submitted to Shrikant';
                                    break;
                                case 7:
                                    echo 'Shrikant Approved';
                                    break;
                                case 8:
                                    echo 'Submitted to Finance';
                                    break;
                                case 9:
                                    echo 'Finance Approved';
                                    break;
                                case 10:
                                    echo 'Rejected';
                                    break;
                                case 11:
                                    echo 'Paid';
                                    break;
                            }
                            echo '</td>';

                        ?>
                            <form class="form-horizontal" action="<?php echo base_url('etrack/claims/edit_claim'); ?>" method="POST"><?= csrf_field() ?>
                                <td>
                                    <input type="hidden" name="vd_id" value="<?php echo $claimx['vd_id']; ?>">
                                    <button type="submit" class="btn btn-outline-warning waves-effect btn-xs waves-light"><span class="mdi mdi-pencil-outline"></span></button>
                                </td>
                            </form>
                           
                        <?php
                            echo '</tr>';
                        }
                        ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div> <!-- end col-->
</div>