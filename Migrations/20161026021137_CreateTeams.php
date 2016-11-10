<?php
use Migrations\AbstractMigration;


class CreateTeams extends AbstractMigration
{

    public function change()
    {
        $table = $this->table('teams');
        $table->addColumn('name', 'string', [
            'default' => null,
            'limit' => 255,
            'null' => false,
        ])
        ->create();
    }
}
