<?php
use Migrations\AbstractMigration;


class CreateLevelsStationsTeams extends AbstractMigration
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
        $table = $this->table('levels_stations');
        $table->addColumn('level_id', 'integer', array('signed'=> 'disable'))
        ->addForeignKey('level_id','levels','id',array('delete'=>'CASCADE', 'update'=>'NO_ACTION'))
        ->addColumn('station_id', 'integer', array('signed'=> 'disable'))
        ->addForeignKey('station_id','stations','id',array('delete'=>'CASCADE', 'update'=>'NO_ACTION'))
        ->addColumn('teams_id', 'integer')
        ->addForeignKey('teams_id','teams','id',array('delete'=>'CASCADE', 'update'=>'NO_ACTION'))
        ->create();
    }
}
