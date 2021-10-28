@php
$total_fee_stripe = 0;
$total_fee_application = 0;
$total_fee_total = 0;
@endphp
<table>
    <thead>
        <tr>
            <th colspan="7">Donation Details</th>
            <th colspan="3">Fees</th>
            <th colspan="3">Donor</th>
            <th colspan="6">Internal Details</th>
        </tr>
        <tr>
            <th>ID</th>
            <th>Time</th>
            <th>Amount</th>
            <th>Converted Amount</th>
            <th>Transaction ID</th>
            <th>Currency</th>
            <th>Country</th>
            <th>Stripe Fee</th>
            <th>Application Fee</th>
            <th>Total Fees</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gateway</th>
            <th>Stripe Account</th>
            <th>Application</th>
            <th>Organization</th>
            <th>Campaign</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($donations as $donation)
            <tr>
                <td>{{ $donation->id }}</td>
                <td>{{ date('d/m/y H:i:s', strtotime($donation->created_at)) }}</td>
                <td>{{ $donation->amount }}</td>
                <td>{{ $donation->converted_amount }}</td>
                <td>{{ $donation->transaction_id }}</td>
                <td>{{ object($donation->currency, 'currency', '') }}</td>
                <td>{{ $donation->country }}</td>
                <td>
                    @if (count($donation->fees) && ($fee = $donation->fees->where('type', 'stripe_fee')->first()))
                        {{ $fee->amount }}{{ $fee->currency }}
                        @php $total_fee_stripe += $fee->amount @endphp
                    @endif
                </td>
                <td>
                    @if (count($donation->fees) && ($fee = $donation->fees->where('type', 'application_fee')->first()))
                        {{ $fee->amount }}{{ $fee->currency }}
                        @php $total_fee_application += $fee->amount @endphp
                    @endif
                </td>
                <td>
                    @if (count($donation->fees))
                        {{ $donation->fees->sum('amount') }}
                        @php $total_fee_total += $donation->fees->sum('amount') @endphp
                    @endif
                </td>
                <td>{{ object($donation->donor, 'full_name', '') }}</td>
                <td>{{ object($donation->donor, 'email', '') }}</td>
                <td>{{ $donation->gateway }}</td>
                <td>{{ object($donation->stripe_account, 'name', '') }}</td>
                <td>{{ object($donation->application, 'name', '', '') }}</td>
                <td>{{ object($donation->organization, 'name', '') }}</td>
                <td>{{ object($donation->campaign, 'name', '') }}</td>
            </tr>
        @endforeach
        <tr>
            <th colspan="2">Total:</th>
            <th>{{ $donations->sum('amount') }}</th>
            <th>{{ $donations->sum('converted_amount') }}</th>
            <th colspan="3"></th>
            <th>{{ $total_fee_stripe }}</th>
            <th>{{ $total_fee_application }}</th>
            <th>{{ $total_fee_total }}</th>
            <th colspan="7"></th>
        </tr>
    </tbody>
</table>
