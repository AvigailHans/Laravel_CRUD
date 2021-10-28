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

    </style>
</head>

<body>
    <div class="logo">
        <img src="{{ public_path('logo.png') }}" alt="">
    </div>
    <h1>Ne'eman Foundation USA</h1>
    <h2> GRANT AGREEMENT
    </h2>
    <p>
           THIS GRANT AGREEMENT (the
            “Agreement”) is made effective this {{ date('jS') }} day of {{ date('F', time()) }},
            {{ date('Y', time()) }} by and between Ne’eman Foundation (USA) (“Grantor”) and
            {{ $organization->name }} ({{ $organization->number }}) (“Grantee”).

    </p>
    <p> WHEREAS, Grantor is an organization exempt from federal income tax pursuant to Section 
        501(c)(3) of the Internal Revenue Code of 1986, as amended (the “Code”), and was organized and is 
operated exclusively for charitable, educational, and religious purposes, particularly to raise funds and 
provide charitable grants, subject to the discretion and control of the Grantor’s Board of Directors (the 
“Board”), to support charitable, educational, and religious organizations in Israel; and 
    </p>
    <p> WHEREAS, following the approval of the Board, Grantor desires to provide charitable grants 
to Grantee in furtherance of Grantee’s charitable purposes (each, a “Grant” and together, the 
“Grants”) subject to certain restrictions upon the purposes for which the Grants may be used; and 
    </p>
    <p>
    WHEREAS, Grantor is a party to a Fiscal Agency Agreement with Ne’eman Foundation for 
Social Progress (R.A.) (Amuta) number 580689867 (“Ne’eman Israel”), pursuant to which Ne’eman 
Israel may act as a fiscal agent to Grantor for certain designated projects and disburse certain Grants 
to grantees in furtherance of Grantor and Ne’eman Israel’s respective charitable purposes and in 
accordance with Grantor’s instructions; and 
    </p>
    <p> WHEREAS, Grantee desires to receive and administer such Grants in furtherance of its 
charitable purposes. 
    </p>
    <p> NOW THEREFORE, in consideration of the Grants to be provided hereunder, and of the 
mutual agreements contained herein, Grantor and Grantee, intending to be legally bound, agree as 
follows: 
    </p>
    <ol class="main">
        <li><b>Duties and Responsibilities of Grantor.</b>
            <ol type="a">
                <li>Grantor may periodically make Grants to Grantee in furtherance of Grantor and/or 
Ne’eman Israel’s charitable, educational, and religious purposes, either directly or indirectly, through 
Ne’eman Israel.  </li>
                <li>In each case, Grantor or Ne’eman Israel will remit the Grant together with a 
transmittal letter, in the form attached as Exhibit A, to communicate the purposes for which such 
Grant may be restricted. Each transmittal letter sent pursuant to this Agreement will be incorporated 
into and considered part of the Agreement.  </li>
            </ol>
        </li>
        <li><b>Representations of Grantee. </b>
            Grantee hereby represents that:
            <ol type="a">
                <li>
a. It has been operated and will operate exclusively for charitable purposes as defined in 
Code Section 501(c)(3);  </li>
                <li> The copies of Grantee’s articles, bylaws, registration as a charitable organization 
under the laws and regulations of Israel, and other governing instruments (together, the 
“Organizational Documents”), and financial reports provided to Grantor are true and correct; 
 </li>
                <li>It meets the requirements of a charitable organization under Code Section 501(c)(3);  </li>
                <li>It is not permitted by law or its Organizational Documents to distribute its assets to 
benefit private parties;  </li>
                <li>The dissolution provisions of its Organizational Documents provide that any of its 
remaining assets will be distributed for charitable purposes;  </li>
                <li> It is not permitted by law to engage in substantial lobbying or any political activity; 
and 
                </li>
                <li>It is not controlled by or operated with any other organization.  </li>
            </ol>
        </li>
        </li>
        <li><b>Duties and Responsibilities of Grantee . </b>
            <br>Grantee agrees that it shall:
            <ol type="a">
                <li>Use the Grants for the purposes specified in this Agreement;  </li>
                <li>Notify Grantor promptly in writing of any changes to its charitable activities or its Organizational
                    Documents within thirty (30) days of such changes; </li>
                <li> Provide Grantor and Ne’eman Israel, with copies of its annual financial reports within 
thirty (30) days of their release; </li>
                <li>Repay any portion of the Grants not used for the purposes specified in this 
Agreement; </li>
                <li>Not use any of the Grants for political or legislative purposes; </li>
                <li>Maintain books and records regarding the use of the Grants, including complete 
records of receipts and expenditures, and make them available for inspection by Grantor and Ne’eman 
Israel, for a period of four (4) years following use of the Grants;  </li>
                <li> Permit a Director of Grantor or, Ne’eman Israel, or a designee of Grantor or Ne’eman 
Israel, to make field visits to Grantee’s offices and/or facilities, upon reasonable notice;  </li>
                <li>Prepare and submit detailed Expenditure Responsibility Reports to Grantor and 
Ne’eman Israel. regarding the use of the Grants within fifteen (15) days after the close of Grantor’s 
fiscal year (December 31st);  </li>
                <li>Prepare and submit a detailed annual accounting report to Grantor and Ne’eman 
Israel, regarding the use of the Grants; </li>
                <li> Respond promptly to telephone and written inquiries from Grantor and Ne’eman 
Israel, regarding the use of the Grants and Grantee’s charitable status; 
 </li>
                <li>Keep the Grants in a separate fund dedicated to charitable purposes; </li>
                <li>Notify Grantor and Ne’eman Israel, immediately if it discovers any evidence of 
misconduct with respect to the Grants; 
                </li>

        </li>
        <li><b>Term and Termination.</b>
            <ol type="a">
                <li>The term of this Agreement shall begin as of the date first above written and shall 
continue until all Grants have been expended. This Agreement may be extended only upon mutual 
consent of the parties in writing. </li>
                <li>Except as otherwise provided in this Agreement, this Agreement may be terminated 
for cause in the event of a breach by Grantee upon thirty (30) days prior written notice (the “Notice 
Period”), provided, however, that Grantee shall have the same Notice Period in which to cure said 
breach. Upon termination for cause, Grantee shall return all unspent Grants and any portion not used 
for permitted purposes to Grantor at the expiration of the Notice Period. </li>
                <li>Grantor retains the exclusive right to terminate this Agreement immediately if 
Grantee fails to use the Grants for the purposes specified in this Agreement. Upon termination for 
failure to use the Grants as specified in this Agreement. Grantee must immediately return all such 
Grants to Grantor directly or, if received from Ne’eman Israel, to Ne’eman Israel. 
                </li>
            </ol>
        <li><b>Licensure and Certification. </b>
            <br>
            Throughout the term of this Agreement, Grantee shall maintain all applicable licenses and 
registrations required by the laws and regulations of Israel for Grantee to use the Grants for the 
charitable purposes specified in this Agreement. 
        <li><b>Indemnification. </b>
         <br>
Grantee will indemnify and hold Grantor and Ne’eman Israel harmless from any and all 
liability, loss, damages, costs and expenses, including reasonable counsel fees, resulting from 
Grantee’s negligent performance of its obligations hereunder.  </li>
        <li><b>Independent Contractor. </b> <br>
        In performing its obligations with respect to the Grants pursuant to this Agreement, Grantee 
shall have the status of an independent contractor. Nothing herein shall be construed to create any 
partnership, agency, or joint venture relationship between Grantee and Grantor, or between Grantee 
and Ne’eman Israel, and neither party to this Agreement shall make any representations to the 
contrary. </li>
        <li><b>Entire Agreement. </b>
        This Agreement constitutes the sole agreement between the parties with respect to the subject 
matter hereof. Grantor specifically reserves the right to enter into similar or different grant 
agreements with others. This Agreement can only be changed by an instrument signed by an 
authorized representative of each party. A waiver by any party of any term or condition of this 
Agreement in any instance shall not be deemed or construed as a waiver of such term or condition for 
the future or of any subsequent breach thereof.  </li>
        <li><b>Assignment. </b> 
        <br>Grantee shall not assign or otherwise transfer this Agreement. </li>
        <li><b>Notices. </b> 
      
Any notice herein required or permitted to be given by either party shall be deemed given if 
and when mailed in a sealed wrapper by United States certified or registered mail, postage prepaid, 
return receipt requested, to the following addresses or any other address designated by either party in 
writing: 
            <br>
            <br>
            <table v-align="top">
                <tr>
                    <td><u>If to Grantee:</u></td>
                    <td><u>If to Grantor:</u></td>
                </tr>
                <tr>
                    <td>{{ $organization->name }}
                        <br>
                        {{ $organization->address }}
                        <br>
                        {{ $organization->address_2 }}
                        {{ $organization->state }}
                    </td>
                    <td>Ne’eman Foundation (USA)<br>
                        c/o Laura Solomon & Associates<br>
                        121 Sibley Avenue<br>
                        Ardmore, PA 19003<br>
                        Attn: Laura N. Solomon, Esq.
                    </td>
                </tr>
            </table>
        </li>

        <li><b>Authority. </b><br>
           
Grantor and Grantee each represents and warrants to the other that it has the full and 
unencumbered right to enter into this Agreement and to perform its obligations hereunder. 
        </li>
        <li><b>Counterparts. </b> <br>
        This Agreement may be executed in counterparts, each of which shall constitute an original 
and both of which shall constitute one and the same instrument. 
        </li>
        <li><b>Severability. </b> <br>
            The various provisions of this Agreement are severable from each other and from the rest of 
the Agreement, and in the event that any non-material part of this Agreement shall be held invalid or 
unenforceable by a court of competent jurisdiction, the remainder of this Agreement shall be fully 
effective, operative, and enforceable. </li>
        <li><b>Governing Law. </b> <br>
        This Agreement shall be governed by, interpreted and enforced in accordance with the laws 
and in the Courts of the Commonwealth of Pennsylvania, without reference to conflict of laws 
doctrine. 
        </li>
        <li><b>Survival. </b> <br>
        The terms and conditions of Sections 3.f, 3.h, 3.i, 6, 14, and 15 shall survive the termination 
of this Agreement. </li>
    </ol>
    <p>
        IN WITNESS WHEREOF, the parties hereto have executed and delivered this Agreement on the date written below.
    </p>
    <br>
    <br>
    <br>
    <p>
    <table v-align="top">
        <tr>
            <td>
                {{ $organization->name }}
                <br>
                <br>
                <br>
                <br>
                _______________________________
                <br>
                <br>
                By: {{ $organization->authorized_signatory }}
                <br>Its: _____________
                <br>
                Date:_____________________

            </td>
            <td>
                NE’EMAN FOUNDATION (USA)
                <br>
                <br>
                <br>
                <br>
                _____________________________
                <br>
                <br>
                By: Chaim Katz
                <br>Its: President
                <br>
                Date:_____________________
            </td>
        </tr>
    </table>
    </p>

</body>

</html>
