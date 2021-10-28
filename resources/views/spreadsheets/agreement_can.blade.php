<!doctype html>
<html>

<head>
    <meta charset="UTF-8">
    <style type="text/css">
        * {
            text-align: justify;
            margin: 0;
            padding: 0;
        }

        .red {
            color: #FF0000;
        }

        .center {
            text-align: center;
        }

        body {
            margin: 2cm 3cm 4cm 3cm;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            text-align: center;
            font-weight: bold;
            margin-bottom: 1cm;
        }

        ol {
            margin: 0;
            padding: 0;
            padding-left: 30px;
        }

        p,
        li {
            margin-bottom: 0.5cm;
        }

        p,
        table {
            page-break-inside: avoid;
            break-inside: avoid;
        }

        li {
            list-style-position: outside;
        }

        ol ol>li {
            margin-left: 1cm;
            page-break-inside: avoid;
            break-inside: avoid;
        }

        ol ol ol>li {
            margin-left: 2cm;
        }

        ol ol ol ol>li {
            margin-left: 3cm;
        }

        ol.main>li>b {
            font-weight: bold;
            font-style: italic;
            text-decoration: underline;
            display: block;
            page-break-before: auto;
            page-break-after: avoid;
        }

        table,
        th,
        td {
            border: 1px solid black;
            border-collapse: collapse;
        }

        table {
            width: 100%;
        }

        td {
            vertical-align: top;
        }

        .logo {
            text-align: center;
            margin-bottom: 0.5cm;
            display: block;
            width: 100%;
        }

        img {
            width: 2cm;
        }

        .page-break-before {
            page-break-before: always;
        }

    </style>
</head>

<body>
    <div class="logo">
        <img src="{{ public_path('logo.png') }}" alt="">
    </div>

    <h3><b>NE'EMAN FOUNDATION CANADA</b></h3>

    <h2><b>MASTER AGENCY AGREEMENT</b></h2>
    <p class="center">B E T W E E N:</p>
    <p class="center">
        Ne’eman Foundation Canada<br>

        a Canadian Non Share Capital Corporation.<br>

        Hereinafter referred to as the "Principal")
        <br>
        <br>
        OF THE FIRST PART
    </p>
    <p class="center">
        @if ($organization->his_country->id == 'IL')
            AND: {{ $organization->name }} {{ $organization->number }}
        @else
            AND:
            {{ $organization->name }} (Registered {{ $organization->his_country->name }} charity
            {{ $organization->number }})

        @endif
        <br>
        <br>(hereinafter referred to as the "Agent")<br>
        <br>OF THE SECOND PART
    </p>

    <p>
        <b>WHEREAS:</b> The Principal is a charity registered with the Canada Revenue Agency under the
        Canadian Income Tax Act, R.S.C. 1985; and
    </p>

    <p>
        @if ($organization->his_country->id == 'IL')
            <b>WHEREAS:</b> The Agent is a registered Amuta in Israel.
        @else
            <b>WHEREAS:</b> The Agent is a registered Charity in {{ $organization->his_country->name }}.
        @endif
    </p>
    <p>
        <b>WHEREAS:</b> The Principal wishes to carry out certain projects in {{ $organization->his_country->name }}
        as set out herein, and
        wishes to engage the Agent as its agent to carry out such projects on its behalf.
    </p>
    <p>
        <b>NOW THEREFORE THE PARTIES HERETO AGREE AS FOLLOWS:</b>
    </p>
    <ol class="main">
        <li>
            <b>Terms of Engagement </b>
            <ol>
                <li>
                    The Principal hereby engages the Agent as its agent to carry out those projects
                    specifically set out from time to time in Schedule B (collectively the "Projects" and each
                    a "Project"), and the Agent agrees to act as such agent strictly in accordance with the terms of
                    this Agreement.
                </li>
                <li>
                    A Project shall be added to Schedule B by one party proposing in writing a Project to the
                    other party and the other party accepting such proposed Project in writing.
                </li>
                <li>
                    On behalf of the Principal, the Agent shall carry out the Projects set out from time to time
                    in Schedule B.
                </li>
                <li>
                    The Agent agrees that it will at all times carry out its duties and obligations under the
                    Agreement so as to strictly comply with the charitable nature of the objects of the
                    Principal as described in Schedule A.
                </li>
                <li>
                    The Agent shall not have the authority to do any act on behalf of the Principal or to bind
                    the Principal except as specifically authorized by the terms hereof.
                </li>
                <li>
                    Any construction, work or operation of any kind whatsoever performed by an Agent
                    pursuant to this Agreement shall be performed only in strict compliance with all
                    governing laws, statutes or ordinances. IN PARTICULAR, THE AGENT SHALL NOT
                    APPLY ANY OF THE RESOURCES OF THE PRINCIPAL TO THE DIRECT OR
                    INDIRECT SUPPORT OF TERRORISM. THE AGENT ALSO REPRESENTS AND
                    WARRANTS THAT IT DOES NOT SUPPORT AND HAS NEVER SUPPORTED
                    AND WILL NOT IN FUTURE SUPPORT, DIRECTLY OR INDIRECTLY, ANY
                    TERRORIST ACTIVITIES OR TERRORIST GROUPS.
                </li>
                <li>
                    On behalf of the Principal, the Agent shall carry out the Projects set out from time to time
                    in Schedule B.
                </li>
            </ol>
        </li>
        <li>
            <b>Accounting of Funds </b>
            <ol>
                <li>
                    The Principal and the Agent shall maintain full and complete books and records of all
                    receipts and disbursements of any funds received from the Principal. A complete record
                    of all agreements, deeds, vouchers, receipts and invoices with respect to each Project
                    shall be maintained by the Principal and the Agent shall ensure that the relevant
                    documents are forwarded to the Principal on a quarterly basis.
                </li>
                <li>
                    All expenditures of the Principal made by and through the Agent shall remain segregated
                    and apart from the Agent's own expenditures so that the role of the Principal in any
                    particular activity or program is separately identifiable as the charitable activity of the
                    Principal.
                </li>
                <li>
                    The Principal shall not be obligated to provide any funds for any of the purposes set out
                    herein other than amounts required to reimburse the Agent for costs incurred on behalf of
                    the Principal. The Principal shall only make payment for a Project to the Agent by
                    instalments and only upon confirmation (by means of the reports provided for in article 3
                    hereof) that funds previously provided for such Project have been applied in accordance
                    with this Agreement by the Agent.
                </li>
                <li>
                    A budget for each Project shall be established on or before the beginning of each fiscal
                    year. Each budget shall set out the Principal's plan for each fiscal year for spending on
                    both capital costs and on operating costs, and shall indicate how such funds are to be
                    spent. The Agent may make recommendations regarding a budget for any upcoming year

                    but the Principal shall have the sole and final responsibility for establishing its
                    expenditure under each budget. Money received by the Agent from the Principal in
                    accordance with this Agreement shall be carefully disbursed only in strict accordance
                    with the relevant budget (as amended from time to time by the Principal). However, the
                    Principal shall not be obligated to make available to the Agent for disbursement any of
                    the funds which are provided for in a budget.
                </li>
                <li>
                    The Agent agrees that it shall not be entitled to receive any remuneration for the services
                    provided in accordance with the terms of this Agreement other than the remuneration
                    provided for in this Agreement. The Agent shall be entitled to be reimbursed for its out-
                    of-pocket costs for administering the funds of the Principal or supervising a Project of the
                    Principal including the audit of its accounts relating to the funds of the Principal held by
                    the Agent. Reimbursement shall be completed either by reimbursement for specific costs
                    relating to the Project or by reimbursement based on a percentage of the funds of the
                    Principal used for the Project. In the case of reimbursement for specific costs, the Agent
                    shall submit a list of specific costs with accompanying receipts. In the case of percentage
                    reimbursement, this percentage is to be agreed upon between the Principal and the Agent.
                </li>
                <li>
                    The Principal may request permission at any time to inspect any books, records, or
                    accounts kept by the Agent which relate to the Agent’s duties and obligations hereunder,
                    and also to inspect any physical assets the acquisition of which was financed by the
                    Principal and which are therefore hereby acknowledged to be owned beneficially by the
                    Principal.
                </li>
            </ol>
        </li>
        <li>
            <b>Reporting Requirements </b>
            <ol>
                <li>
                    The Agent shall provide to the Principal on a quarterly basis, a Financial Accounting
                    Report on the administration and application of the funds of the Principal on each Project
                    in which the Agent is involved. Each periodic report will show the receipts and
                    disbursement of any funds received from the Principal under the control of the Agent
                    during the reporting period as well as a comparison of budgeted expenditures for capital
                    and operating costs with actual expenditures for these items.
                </li>
                <li>
                    The Agent shall provide to the Principal on a quarterly basis written reports summarizing
                    the activity engaged in on behalf of the Principal by the Agent during the reporting period
                    on each Project. Specifically each report will include detailed Project-specific
                    operational reporting, including such items as photos, minutes of meetings and other
                    relevant records.
                </li>
            </ol>
        </li>
        <li>
            <b>Indemnity </b>
            <ol>
                <li>
                    The Agent hereby irrevocably and unconditionally agrees to defend, indemnify, hold
                    harmless, release, waive, discharge and covenant not to sue the Principal and its affiliates,
                    subsidiaries, divisions, members, directors, officers, employees and agents (herein the
                    "Releasees"), for and from all claims of any nature relating in any way to a Project, now
                    or hereafter existing whether known or unknown, including but not limited to, all liability
                    to the Agent, its volunteers and personnel, or other third parties, on account of injury or
                    death or injury to the property to any of the volunteers or personnel of the Agent or other


                    third persons, whether caused by the negligence of Releasees or otherwise while the
                    Agent and its volunteers and personnel are participating in a Project.
                </li>
                <li>
                    Immediately upon a party becoming aware of any claim or potential claim which could
                    give rise to an indemnity obligation pursuant to this agreement (a "Claim"), the party
                    shall notify the other party of such Claim.
                </li>
            </ol>
        </li>
        <li>
            <b>General Terms </b>
            <ol>
                <li>
                    This Agreement will be in force and have effect from the date of signing until it is
                    superseded or replaced by a subsequent agreement or until it is terminated by the Agent
                    upon giving thirty day's written notice or by the Principal immediately upon giving
                    written notice. In the event of termination, the Agent shall refund to the Principal any
                    monies advanced by the Principal and not expended in accordance with the approved
                    guidelines and intentions of the Principal as stated in this Agreement or in any other
                    written instructions made by the Principal to that Agent.
                </li>
                <li>
                    This Agreement supersedes and invalidates all other commitments, representations and
                    warranties which may have been made between the parties either orally or in writing
                    prior to the date hereof, and all of which shall become null and void from the date this
                    Agreement is effective.
                </li>
                <li>This Agreement shall be binding on the successors of the parties. </li>
                <li>
                    This Agreement shall not be assignable by the Agent without the prior written consent of
                    the Principal.
                </li>
            </ol>
        </li>
    </ol>
    <p class="page-break-before">
        This Agreement shall be governed by the laws of the Province of Ontario and the federal laws of
        Canada.
    </p>

        <p>
        <b>IN WITNESS WHEREOF</b> 
 
        this agreement has been executed on  the {{ date('jS', time()) }}
      
        day of {{ date('F', time()) }}, {{ date('Y', time()) }}.
        </p >
    <p class="center">
        <b>Ne’eman Foundation Canada</b><br>
        <br>
        <br>
        <br>
        Per: _______________________c/s<br>
        <br>
        Chaim Katz<br>
        <br>
        Address: 164 York Hill Blvd.
        <br>
        Thornhill, ON L4J 2P6<br>
        Canada<br>
        <br>
        <br>
        Tel: 647.955.1820<br>
        <br>
        <br>
    </p>
 
    <p >
        <b>IN WITNESS WHEREOF</b> 
        <br>
        this agreement has been executed on the {{ date('jS', time()) }}
        
        day of {{ date('F', time()) }}, {{ date('Y', time()) }}.
    </p>
    <p class="center">
        <b>{{ $organization->name }}</b><br>
        <br>
        <br>
        <br>
        Per: _______________________c/s<br>
        <br>
        {{ $organization->authorized_signatory }}<br>
        <br>
        Address:
        {{ $organization->address }}<br>
        <br>
        <br>
        Tel: {{ $organization->phone }}<br>
        <br>
        <br>
        <br>
        <br>
    </p>
  
   


    <p class="center page-break-before">
        <b>SCHEDULE A</b><br>
        <br>

        Charitable Purposes of<br>
        <br>

        Ne’eman Foundation<br>
    </p>
    <p>
        The purpose of the Principal is:
    </p>
    <ol>
        <li>
            Relieve poverty by providing basic amenities, including food, clothing and shelter
            to the needy.
        </li>
        <li>
            Advance and teach the religious tenets, doctrines and observances associated with
            the Jewish faith.
        </li>
        <li>
            Advance the Jewish faith by providing spiritual and educational resources to Jews
            in Israel.
        </li>
        <li>
            Provide health care services and products that prevent and manage serious threats
            to health.
        </li>
        <li>
            Provide therapy to accident victims, as well as counseling and support to
            individuals with cancer.
        </li>
        <li>Provide Israeli public ambulance, paramedic, or firefighting services.</li>
    </ol>
    <br>
    <br>
    <br>


    <p class="center page-break-before">
        <b> SCHEDULE B</b>
    </p>

    <table style="width:100%;">
        <tr>
            <th style="width:30%; ">
                Project Name<br>
                <br>
                <br>
            </th>
            <th style="width:70%; ">
                Project Description<br>
                <br>
                <br>
            </th>
        </tr>
        @for ($i = 0; $i <= 8; $i++)
            <tr>
                <td style="width:30%; ">
                    <br>
                    <br>
                    <br>
                </td>
                <td style="width:70%;">
                    <br>
                    <br>
                    <br>
                </td>
            </tr>
        @endfor
    </table>
    <style>
        #header,
        #footer {
            position: fixed;
            left: 0;
            right: 0;
            color: #aaa;
            font-size: 0.9em;
        }

        #header {
            top: 0;
            border-bottom: 0.1pt solid #aaa;
        }

        #footer {
            bottom: 0;
            border-top: 0.1pt solid #aaa;
        }

        .page-number:before {
            content: "Page "counter(page);
        }

    </style>

    <div id="footer">
        <div class="page-number"></div>
    </div>
    <script type="text/php">
        if (isset($pdf)) {
            $text = "page {PAGE_NUM} / {PAGE_COUNT}";
            $size = 10;
            $font = $fontMetrics->getFont("Verdana");
            $width = $fontMetrics->get_text_width($text, $font, $size) / 2;
            $x = ($pdf->get_width() - $width) / 2;
            $y = $pdf->get_height() - 35;
            $pdf->page_text($x, $y, $text, $font, $size);
        }
    </script>
</body>

</html>
