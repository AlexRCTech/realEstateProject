<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run() {
        DB::table('projects')->insert([
            [
                'name' => 'Proyecto A',
                'location' => 'Ciudad X',
                'price' => 150000,
                'type' => 'Departamento',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Proyecto B',
                'location' => 'Ciudad Y',
                'price' => 200000,
                'type' => 'Casa',
                'created_at' => now(),
                'updated_at' => now()
            ]
        ]);
    }
}
