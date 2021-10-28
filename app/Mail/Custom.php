<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Custom extends Mailable
{
    use Queueable, SerializesModels;


    public $custom_message;
    public $files;

    public function __construct($custom_message, $files = false)
    {
        $this->custom_message = $custom_message;
        $this->files = $files;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $email = $this->view('emails.custom')
            ->subject($this->custom_message['subject']);

        if ($this->files) {
            foreach ($this->files as $file) {
                $email->attachData($file->pdf->output(), $file->file_name);
            }
        }
        return $email;
    }
}
