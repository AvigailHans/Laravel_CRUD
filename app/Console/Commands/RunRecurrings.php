<?php

namespace App\Console\Commands;

use App\Recurring;
use App\Jobs\RecurringDonation;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class RunRecurrings extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'neeman:run-recurring';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Run recurring for the day';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $reccurings = Recurring::where('day_of_month', date('d'))->where('active', 1)->whereNotIn('id', function ($query) {
            $query->select('recurring_id')
                ->from('donations')
                ->where('recurring_id', DB::raw('recurrings.id'))
                ->where('created_at', '>=', DB::raw('now() - INTERVAL 1 DAY'));
        })
            ->where('created_at', '<', DB::raw('now() - INTERVAL 1 DAY'))
            ->get();
        foreach ($reccurings as $reccuring) {
            RecurringDonation::dispatch($reccuring);
        }
        return 'ok';
    }
}
