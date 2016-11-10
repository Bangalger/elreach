<?php
use Migrations\AbstractMigration;


class CreateStations extends AbstractMigration
{
    /**
     * Change Method.
     *
     * More information on this method is available here:
     * http://docs.phinx.org/en/latest/migrations.html#the-change-method
     * @return void
     */
    public function change()
    {
        $table = $this->table('stations');
        $table->addColumn('posX', 'integer')
              ->addColumn('posY', 'integer')
              ->addColumn('warning', 'boolean')

        ->create();
    }
}
