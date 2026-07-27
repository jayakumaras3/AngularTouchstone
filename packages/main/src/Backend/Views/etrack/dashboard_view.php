<?php

helper('attendance');

$userlevel = session('userlevel');
$id_user = session('id_user');
$arrayuserlevel = array_map('intval', explode(',', $userlevel) ?? '');

// Attendance Overview donut (In Office/WFH/Leave/Absent, out of working days only, from $start_dt..$end_dt)
// Uses the same attendance_summary() computation as etrack/attendance/view so the two pages agree.
$att_summary = attendance_summary($start_dt ?? '', $end_dt ?? '', date('Y-m-d'), $holidays ?? [], $workfromhome_data ?? [], $leave_data ?? [], $access_card ?? []);
$att_present = $att_summary['in_office_days'];
$att_wfh = $att_summary['wfh_days'];
$att_leave = $att_summary['leave_days'];
// Absent is only meaningful for working days that have already happened, not the whole cycle.
$att_absent = max(0, $att_summary['working_days_elapsed'] - $att_present - $att_wfh - $att_leave);

// Employee Location donut (today's snapshot)
$loc_inoffice = (int) ($inoffice_count ?? 0);
$loc_wfh = (int) ($wfh_today ?? 0);
$loc_leave = (int) ($leave_today ?? 0);
$loc_marked = $loc_inoffice + $loc_wfh + $loc_leave;
$total_employees = (int) ($total_employees ?? 0);

// This Week vs Last Week effort trend (the only pair of real data points we have)
$this_week_effort = (float) ($effort_week[0]['this_week_effort'] ?? 0);
$last_week_effort = (float) ($effort_week[0]['last_week_effort'] ?? 0);
$effort_delta = $this_week_effort - $last_week_effort;
?>
<div class="row">
    <div class="col-12">
        <div class="page-title-box">
            <h4 class="page-title">
                Dashboard
            </h4>
        </div>
    </div>
</div>
<?php if (in_array('7', $arrayuserlevel)) { ?>
    <div class="row">
        <div class="col-md-6 col-xl-3">
            <div class="widget-rounded-circle card">
                <div class="card-body">
                    <a href="<?php echo base_url('Project_Manage/Effort_Tracker'); ?>" class="text-reset">
                        <div class="row">
                            <div class="col-6">
                                <div class="avatar-lg rounded-circle bg-soft-primary border-primary border">
                                    <i class="mdi mdi-alpha-e-box-outline font-22 avatar-title text-primary"></i>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="text-end">
                                    <h3 class="text-dark mt-1"><span data-plugin="counterup"><?php echo $effort_week[0]['this_week_effort'] ?? 0; ?></span></h3>
                                    <p class="text-muted mb-1 text-truncate">This Week Effort</p>
                                </div>
                            </div>
                        </div> <!-- end row-->
                    </a>
                </div>
            </div> <!-- end widget-rounded-circle-->
        </div> <!-- end col-->

        <div class="col-md-6 col-xl-3">
            <div class="widget-rounded-circle card">
                <div class="card-body">
                    <a href="<?php echo base_url('Project_Manage/Effort_Tracker'); ?>" class="text-reset">
                        <div class="row">
                            <div class="col-6">
                                <div class="avatar-lg rounded-circle bg-soft-success border-success border">
                                    <i class="mdi mdi-alpha-e-box font-22 avatar-title text-success"></i>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="text-end">
                                    <h3 class="text-dark mt-1"><span data-plugin="counterup"><?php echo $effort_week[0]['last_week_effort'] ?? 0; ?></span></h3>
                                    <p class="text-muted mb-1 text-truncate">Last Week Effort</p>
                                </div>
                            </div>
                        </div> <!-- end row-->
                    </a>
                </div>
            </div> <!-- end widget-rounded-circle-->
        </div> <!-- end col-->
        <?php if (session()->get('report_to_you') == 2) { ?>

            <div class="col-md-6 col-xl-3">
                <div class="widget-rounded-circle card">
                    <div class="card-body">
                        <a href="<?php echo base_url('Project_Manage/Effort_Tracker/Team_data'); ?>" class="text-reset">
                            <div class="row">
                                <div class="col-6">
                                    <div class="avatar-lg rounded-circle bg-soft-info border-info border">
                                        <i class="mdi mdi-sticker-check-outline font-22 avatar-title text-info"></i>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="text-end">
                                        <h3 class="text-dark mt-1"><span data-plugin="counterup"><?php echo $pending_approval[0]['pending_count'] ?? 0; ?></span></h3>
                                        <p class="text-muted mb-1 text-truncate">Team Effort</p>
                                    </div>
                                </div>
                            </div> <!-- end row-->
                        </a>
                    </div>
                </div> <!-- end widget-rounded-circle-->
            </div> <!-- end col-->

        <?php } ?>
        <?php if (in_array('4', $arrayuserlevel)) { ?>
            <div class="col-md-6 col-xl-3">
                <div class="widget-rounded-circle card">
                    <div class="card-body">
                        <a href="<?php echo base_url('Project_Manage/Effort_Tracker/Approve_access'); ?>" class="text-reset">
                            <div class="row">
                                <div class="col-6">
                                    <div class="avatar-lg rounded-circle bg-soft-warning border-warning border">
                                        <i class="mdi mdi-star-outline font-22 avatar-title text-warning"></i>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="text-end">
                                        <h3 class="text-dark mt-1"><span data-plugin="counterup"><?php echo $pending_access_count ?? 0; ?></span></h3>
                                        <p class="text-muted mb-1 text-truncate">Project Access</p>
                                    </div>
                                </div>
                            </div> <!-- end row-->
                        </a>
                    </div>
                </div> <!-- end widget-rounded-circle-->
            </div> <!-- end col-->
        <?php } ?>
    </div>
<?php } ?>

<div class="row">
    <div class="col-xl-4 col-lg-6 col-md-12 mb-3">
        <div class="card h-100">
            <div class="card-body pb-tight">
                <div class="d-flex justify-content-between align-items-start">
                    <h4 class="header-title mb-0">Attendance<br><span
                            style="font-size:10px; font-style: italic;"><?php echo $start_dt . ' - ' . $end_dt; ?></span>
                    </h4>
                    <form action="<?php echo base_url('etrack/attendance'); ?>" method="POST" class="m-0"><?= csrf_field() ?>
                        <button type="submit" class="btn btn-sm btn-outline-success rounded-pill waves-effect waves-light">
                            My Attendance
                        </button>
                    </form>
                </div>
                <div class="row align-items-center mt-2">
                    <div class="col-6">
                        <div id="attendanceOverviewChart"></div>
                    </div>
                    <div class="col-6">
                        <div class="d-flex align-items-center mb-2"><span class="dash-legend-dot bg-success me-2"></span> In Office <span class="ms-auto fw-semibold"><?php echo attendance_format_days($att_present); ?> Days</span></div>
                        <div class="d-flex align-items-center mb-2"><span class="dash-legend-dot bg-primary me-2"></span> WFH <span class="ms-auto fw-semibold"><?php echo attendance_format_days($att_wfh); ?> Days</span></div>
                        <div class="d-flex align-items-center mb-2"><span class="dash-legend-dot bg-warning me-2"></span> Leave <span class="ms-auto fw-semibold"><?php echo attendance_format_days($att_leave); ?> Days</span></div>
                        <div class="d-flex align-items-center"><span class="dash-legend-dot bg-secondary me-2"></span> Absent <span class="ms-auto fw-semibold"><?php echo attendance_format_days($att_absent); ?> Days</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-xl-4 col-lg-6 col-md-12 mb-3">
        <div class="card ribbon-box h-100">
            <div class="card-body pb-tight">
                <div class="card-widgets">
                    <?php if (($myattendance ?? 0) == 0) { ?>
                        <form action="<?php echo base_url('etrack/dashboard/inoffice'); ?>" method="POST"><?= csrf_field() ?>
                            <input type="hidden" name="in_office" value="1">
                            <button type="submit"
                                class="btn  btn-outline-warning rounded-pill waves-effect waves-light">
                                I am in Office</span>
                            </button>
                        </form>
                    <?php } ?>
                </div>
                <h4 class="header-title mb-0">Employee Status<br>
                    <a href="<?php echo base_url('etrack/dashboard/show_in_office'); ?>" class="font-13 fw-normal text-muted text-decoration-none">(<?php echo $loc_marked; ?>/<?php echo $total_employees; ?>)</a>
                </h4>
                <div class="row align-items-center mt-2">
                    <div class="col-6">
                        <div id="employeeLocationChart"></div>
                    </div>
                    <div class="col-6">
                        <div class="d-flex align-items-center mb-2"><span class="dash-legend-dot bg-success me-2"></span> In Office <span class="ms-auto fw-semibold"><?php echo $loc_inoffice; ?></span></div>
                        <div class="d-flex align-items-center mb-2"><span class="dash-legend-dot bg-primary me-2"></span> WFH <span class="ms-auto fw-semibold"><?php echo $loc_wfh; ?></span></div>
                        <div class="d-flex align-items-center"><span class="dash-legend-dot bg-warning me-2"></span> Leave <span class="ms-auto fw-semibold"><?php echo $loc_leave; ?></span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-xl-4 col-lg-12 col-md-12 mb-3">
        <div class="card h-100">
            <div class="card-body pb-tight">
                <h4 class="header-title mb-2">Quick Links</h4>
                <div class="row g-2">
                    <div class="col-6 col-md-6">
                        <a href="<?php echo base_url('etrack/leaves'); ?>" class="qa-action-item bg-soft-warning text-reset">
                            <span class="qa-action-icon bg-white text-warning">
                                <i class="mdi mdi-calendar-plus"></i>
                            </span>
                            <span class="qa-action-label">Leave</span>
                        </a>
                    </div>
                    <?php if (in_array('7', $arrayuserlevel)) { ?>
                        <div class="col-6 col-md-6">
                            <a href="<?php echo base_url('Project_Manage/Effort_Tracker'); ?>" class="qa-action-item bg-soft-primary text-reset">
                                <span class="qa-action-icon bg-white text-primary">
                                    <i class="mdi mdi-clipboard-text-outline"></i>
                                </span>
                                <span class="qa-action-label">Effort Tracker</span>
                            </a>
                        </div>
                    <?php } ?>
                    <div class="col-6 col-md-6">
                        <a href="<?php echo base_url('etrack/attendance/view'); ?>" class="qa-action-item bg-soft-info text-reset">
                            <span class="qa-action-icon bg-white text-info">
                                <i class="mdi mdi-calendar-check-outline"></i>
                            </span>
                            <span class="qa-action-label">Attendance</span>
                        </a>
                    </div>
                    <?php if (in_array('7', $arrayuserlevel)) { ?>
                        <div class="col-6 col-md-6">
                            <a href="<?php echo base_url('Etrack/Claims/Status'); ?>" class="qa-action-item bg-soft-info text-reset">
                                <span class="qa-action-icon bg-white text-info">
                                    <i class="mdi mdi-sticker-check-outline"></i>
                                </span>
                                <span class="qa-action-label">Status</span>
                            </a>
                        </div>
                    <?php } ?>
                    <?php if (in_array('4', $arrayuserlevel)) { ?>
                        <div class="col-6 col-md-6">
                            <a href="<?php echo base_url('Project_Manage/PM_ucn'); ?>" class="qa-action-item bg-soft-warning text-reset">
                                <span class="qa-action-icon bg-white text-warning">
                                    <i class="mdi mdi-star-outline"></i>
                                </span>
                                <span class="qa-action-label">My UCN</span>
                            </a>
                        </div>
                    <?php } ?>
                    <div class="col-6 col-md-6">
                        <a href="<?php echo base_url('SCORM/scorm_courses'); ?>" class="qa-action-item bg-soft-secondary text-reset">
                            <span class="qa-action-icon bg-white text-secondary">
                                <i class="mdi mdi-youtube-tv"></i>
                            </span>
                            <span class="qa-action-label">Courses</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-xl-6 col-lg-12 col-md-12 mb-3">
        <div class="card h-100">
            <div class="card-body pb-tight">
                <div class="course-section-title d-flex justify-content-between align-items-center mb-2">
                    <h4 class="header-title mb-0"><i class="mdi mdi-cake-variant text-primary me-1"></i> Upcoming Birthdays</h4>
                </div>
                <div class="row g-2">
                    <?php
                    foreach ($birthday_buddies as $birthdays) {
                        $dobTs = strtotime($birthdays['DOB']);
                        $todayTs = strtotime('today');
                        $nextBday = strtotime(date('Y') . '-' . date('m-d', $dobTs));
                        if ($nextBday < $todayTs) {
                            $nextBday = strtotime((date('Y') + 1) . '-' . date('m-d', $dobTs));
                        }
                        $daysUntil = (int) round(($nextBday - $todayTs) / 86400);
                        if ($daysUntil === 0) {
                            $dateLabel = 'Today';
                        } elseif ($daysUntil === 1) {
                            $dateLabel = 'Tomorrow';
                        } else {
                            $dateLabel = date('M j', $nextBday);
                        }
                        $displayName = strlen($birthdays['name']) > 3 ? $birthdays['name'] : $birthdays['name'] . ' ' . $birthdays['last_name'];
                    ?>
                        <div class="col">
                            <div class="dash-people-card text-center">
                                <?php if ($dateLabel === 'Today' || $dateLabel === 'Tomorrow') { ?>
                                    <span class="badge bg-soft-warning text-warning dash-people-badge"><?php echo $dateLabel; ?></span>
                                <?php } else { ?>
                                    <span class="text-muted font-12 dash-people-badge"><?php echo $dateLabel; ?></span>
                                <?php } ?>
                                <div class="avatar-md mx-auto my-2">
                                    <?php if (!empty($birthdays['profile_image']) && !empty($birthdays['profile_foldername'])) { ?>
                                        <img src="<?php echo base_url('assets/assets/uploads/profile/' . $birthdays['id_user'] . "/" . $birthdays['profile_foldername'] . "/" . $birthdays['profile_image']) ?>"
                                            class="img-fluid rounded-circle" alt="profile-image">
                                    <?php } else { ?>
                                        <img src="<?php echo base_url('public/aristo_assets/images/User_2_1.svg') ?>"
                                            class="img-fluid rounded-circle" alt="profile-image">
                                    <?php } ?>
                                </div>
                                <h5 class="mb-0 font-14 text-truncate"><?php echo esc($displayName); ?></h5>
                            </div>
                        </div>
                    <?php
                    }
                    ?>
                </div>
            </div>
        </div>
    </div>

    <div class="col-xl-6 col-lg-12 col-md-12 mb-3">
        <div class="card h-100 dash-carousel-section">
            <div class="card-body pb-tight">
                <div class="course-section-title d-flex justify-content-between align-items-center mb-2">
                    <h4 class="header-title mb-0"><i class="mdi mdi-trophy-award text-primary me-1"></i> Work Anniversary</h4>
                </div>
                <div class="d-flex align-items-center gap-2">
                    <button type="button" class="dash-carousel-prev-btn flex-shrink-0" data-carousel-target="anniv-carousel" data-carousel-dir="-1" aria-label="Previous">
                        <i class="mdi mdi-chevron-left"></i>
                    </button>
                    <div id="anniv-carousel" class="dash-carousel flex-grow-1">
                        <?php
                        foreach ($anniv_buddies as $anniv) {
                            $aday = date('Y', strtotime($anniv['DOJ']));
                            $this_year = date('Y');
                            $anniversary = $this_year - $aday;
                            $displayName = strlen($anniv['name']) > 3 ? $anniv['name'] : $anniv['name'] . ' ' . $anniv['last_name'];
                        ?>
                            <div class="dash-carousel-item dash-carousel-item-compact">
                                <div class="dash-people-card text-center">
                                    <span class="badge bg-soft-primary text-primary dash-people-badge"><?php echo $anniversary; ?> Yr<?php echo $anniversary == 1 ? '' : 's'; ?></span>
                                    <div class="avatar-md mx-auto my-2">
                                        <?php if (!empty($anniv['profile_image']) && !empty($anniv['profile_foldername'])) { ?>
                                            <img src="<?php echo base_url('assets/assets/uploads/profile/' . $anniv['id_user'] . "/" . $anniv['profile_foldername'] . "/" . $anniv['profile_image']) ?>"
                                                class="img-fluid rounded-circle" alt="profile-image">
                                        <?php } else { ?>
                                            <img src="<?php echo base_url('public/aristo_assets/images/User_2_1.svg') ?>"
                                                class="img-fluid rounded-circle" alt="profile-image">
                                        <?php } ?>
                                    </div>
                                    <h5 class="mb-0 font-14 text-truncate"><?php echo esc($displayName); ?></h5>
                                </div>
                            </div>
                        <?php
                        }
                        ?>
                    </div>
                    <button type="button" class="dash-carousel-next-btn flex-shrink-0" data-carousel-target="anniv-carousel" data-carousel-dir="1" aria-label="Next">
                        <i class="mdi mdi-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-xl-6 col-lg-12 col-md-12 mb-3">
        <div class="card h-100">
            <div class="card-body pb-tight">
                <h4 class="header-title mb-3">Upcoming Holidays</h4>
                <?php if (!empty($upcoming_holidays)) { ?>
                    <div class="row">
                        <?php foreach ($upcoming_holidays as $hol) {
                            $hdt = strtotime($hol['holiday_dt']);
                        ?>
                            <div class="col-6">
                                <div class="d-flex align-items-center mb-3">
                                    <div class="text-center bg-soft-warning rounded p-2 me-3" style="min-width:56px;">
                                        <div class="text-uppercase font-11 text-warning fw-bold"><?php echo date('M', $hdt); ?></div>
                                        <div class="font-18 fw-bold text-warning"><?php echo date('d', $hdt); ?></div>
                                    </div>
                                    <div>
                                        <div class="fw-semibold"><?php echo esc($hol['description']); ?></div>
                                        <div class="text-muted font-13"><?php echo date('l', $hdt); ?></div>
                                    </div>
                                </div>
                            </div>
                        <?php } ?>
                    </div>
                <?php } else { ?>
                    <p class="text-muted mb-0">No upcoming holidays.</p>
                <?php } ?>
            </div>
        </div>
    </div>

    <div class="col-xl-6 col-lg-12 col-md-12 mb-3">
        <div class="card h-100">
            <div class="card-body pb-tight">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="header-title mb-0">Leave Balance</h4>
                    <a href="<?php echo base_url('etrack/leaves'); ?>" class="font-13">View All</a>
                </div>
                <div class="row">
                    <?php foreach (($leave_balance ?? []) as $lb) {
                        $total = max(0, (int) $lb['total']);
                        $balance = (float) $lb['balance'];
                        $used = max(0, $total - $balance);
                        $pct = $total > 0 ? min(100, (int) round(($used / $total) * 100)) : 0;
                    ?>
                        <div class="col-md-6 mb-3">
                            <div class="d-flex justify-content-between">
                                <span><?php echo esc($lb['label']); ?></span>
                                <span class="text-muted font-13"><?php echo $used; ?> / <?php echo $total; ?> Days</span>
                            </div>
                            <div class="progress" style="height:6px;">
                                <div class="progress-bar bg-primary" role="progressbar" style="width: <?php echo $pct; ?>%"></div>
                            </div>
                        </div>
                    <?php } ?>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .card {
        border-radius: 18px;
        overflow: hidden;
        box-shadow: 0 0.5rem 1.5rem rgba(50, 58, 70, 0.12);
    }

    .pb-tight {
        padding-bottom: 0.25rem;
    }

    .qa-action-item {
        display: flex;
        align-items: center;
        gap: 0.65rem;
        padding: 0.6rem 0.7rem;
        border-radius: 14px;
        text-decoration: none;
        cursor: pointer;
        transition: transform 0.15s ease, box-shadow 0.15s ease;
    }

    button.qa-action-item {
        text-align: left;
        font: inherit;
    }

    .qa-action-item:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
        text-decoration: none;
    }

    .qa-action-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        width: 2.25rem;
        height: 2.25rem;
        border-radius: 10px;
        font-size: 1.05rem;
    }

    .qa-action-label {
        font-size: 0.8125rem;
        font-weight: 600;
        color: #313a46;
        line-height: 1.2;
    }

    .dash-legend-dot {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
    }

    .dash-carousel {
        display: flex;
        gap: 1rem;
        overflow-x: auto;
        overflow-y: hidden;
        padding-bottom: 0.5rem;
        scroll-snap-type: x proximity;
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
    }

    .dash-carousel::-webkit-scrollbar {
        display: none;
    }

    .dash-carousel-item {
        flex: 0 0 220px;
        max-width: 220px;
        scroll-snap-align: start;
    }

    .dash-carousel-item-compact {
        flex: 0 0 118px;
        max-width: 118px;
    }

    .dash-carousel-nav {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .dash-carousel-nav-btn,
    .dash-carousel-next-btn,
    .dash-carousel-prev-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, 0.1);
        background-color: #fff;
        color: #6c757d;
        transition: background-color 0.15s ease, color 0.15s ease;
    }

    .dash-carousel-nav-btn:hover,
    .dash-carousel-next-btn:hover,
    .dash-carousel-prev-btn:hover {
        background-color: var(--bs-primary, #727cf5);
        color: #fff;
    }

    .dash-carousel-nav-btn:disabled,
    .dash-carousel-next-btn:disabled,
    .dash-carousel-prev-btn:disabled {
        opacity: 0.4;
        cursor: default;
        pointer-events: none;
    }

    .dash-people-card {
        border: 1px solid rgba(0, 0, 0, 0.08);
        border-radius: 14px;
        padding: 0.85rem 0.6rem;
        background-color: #fff;
    }

    .dash-people-badge {
        font-size: 0.7rem;
        font-weight: 600;
    }

    .avatar-sm.dash-avatar-stack {
        height: 2rem;
        width: 2rem;
        margin-left: -10px;
        overflow: hidden;
    }

    .dash-avatar-stack:first-child {
        margin-left: 0;
    }
</style>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        var donutColors = ['#0acf97', '#727cf5', '#ffbc00', '#adb5bd'];

        if (document.getElementById('attendanceOverviewChart') && window.ApexCharts) {
            new ApexCharts(document.getElementById('attendanceOverviewChart'), {
                chart: {
                    type: 'donut',
                    height: 180
                },
                series: <?php echo json_encode([$att_present, $att_wfh, $att_leave, $att_absent]); ?>,
                labels: ['In Office', 'WFH', 'Leave', 'Absent'],
                colors: donutColors,
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '72%',
                            labels: {
                                show: true,
                                name: {
                                    show: true
                                },
                                value: {
                                    show: true
                                },
                                total: {
                                    show: false
                                }
                            }
                        }
                    }
                }
            }).render();
        }

        if (document.getElementById('employeeLocationChart') && window.ApexCharts) {
            new ApexCharts(document.getElementById('employeeLocationChart'), {
                chart: {
                    type: 'donut',
                    height: 180
                },
                series: <?php echo json_encode([$loc_inoffice, $loc_wfh, $loc_leave]); ?>,
                labels: ['In Office', 'WFH', 'Leave'],
                colors: donutColors,
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '72%'
                        }
                    }
                }
            }).render();
        }

        if (document.getElementById('effortSparkline') && window.ApexCharts) {
            new ApexCharts(document.getElementById('effortSparkline'), {
                chart: {
                    type: 'line',
                    height: 35,
                    sparkline: {
                        enabled: true
                    }
                },
                series: [{
                    data: <?php echo json_encode([$last_week_effort, $this_week_effort]); ?>
                }],
                stroke: {
                    curve: 'smooth',
                    width: 2
                },
                colors: ['<?php echo $effort_delta >= 0 ? '#0acf97' : '#fa5c7c'; ?>'],
                tooltip: {
                    enabled: false
                }
            }).render();
        }

        function updateDashNavButtons(track) {
            var wrapper = track.closest('.dash-carousel-section');
            if (!wrapper) return;
            var prevBtn = wrapper.querySelector('.dash-carousel-nav-btn[data-carousel-dir="-1"], .dash-carousel-prev-btn[data-carousel-dir="-1"]');
            var nextBtn = wrapper.querySelector('.dash-carousel-nav-btn[data-carousel-dir="1"], .dash-carousel-next-btn[data-carousel-dir="1"]');
            var maxScroll = track.scrollWidth - track.clientWidth;
            if (prevBtn) prevBtn.disabled = track.scrollLeft <= 0;
            if (nextBtn) nextBtn.disabled = track.scrollLeft >= maxScroll - 1;
        }

        document.querySelectorAll('.dash-carousel').forEach(function(track) {
            updateDashNavButtons(track);
            track.addEventListener('scroll', function() {
                updateDashNavButtons(track);
            });
        });

        document.querySelectorAll('.dash-carousel-nav-btn, .dash-carousel-next-btn, .dash-carousel-prev-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var track = document.getElementById(btn.dataset.carouselTarget);
                if (!track) return;
                var dir = parseInt(btn.dataset.carouselDir, 10);
                var item = track.querySelector('.dash-carousel-item');
                var cardWidth = item ? item.offsetWidth : 220;
                track.scrollBy({
                    left: dir * (cardWidth + 16) * 2,
                    behavior: 'smooth'
                });
            });
        });
    });
</script>