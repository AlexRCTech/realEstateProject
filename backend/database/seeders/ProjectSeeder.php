<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        DB::table('projects')->insert([
            [
                'name' => 'Edificio Santa Bárbara',
                'location' => 'Usaquén, Bogotá',
                'price' => 450000000,
                'type' => 'Apartamento',
                'lat' => 4.693425,
                'lng' => -74.030046,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Torre Central Chapinero',
                'location' => 'Chapinero, Bogotá',
                'price' => 780000000,
                'type' => 'Oficina',
                'lat' => 4.645722,
                'lng' => -74.064611,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Condominio La Felicidad',
                'location' => 'Fontibón, Bogotá',
                'price' => 350000000,
                'type' => 'Casa',
                'lat' => 4.664703,
                'lng' => -74.123915,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Proyecto Altos de Suba',
                'location' => 'Suba, Bogotá',
                'price' => 520000000,
                'type' => 'Apartamento',
                'lat' => 4.748488,
                'lng' => -74.082278,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Centro Empresarial Bogotá',
                'location' => 'La Candelaria, Bogotá',
                'price' => 1200000000,
                'type' => 'Oficina',
                'lat' => 4.601573,
                'lng' => -74.066558,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Residencias El Nogal',
                'location' => 'El Nogal, Bogotá',
                'price' => 860000000,
                'type' => 'Apartamento',
                'lat' => 4.657924,
                'lng' => -74.053797,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Parque Central Bavaria',
                'location' => 'Santa Fé, Bogotá',
                'price' => 730000000,
                'type' => 'Oficina',
                'lat' => 4.611091,
                'lng' => -74.072741,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Torres de Castilla',
                'location' => 'Kennedy, Bogotá',
                'price' => 320000000,
                'type' => 'Apartamento',
                'lat' => 4.627505,
                'lng' => -74.147369,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Conjunto Residencial Cedritos',
                'location' => 'Cedritos, Bogotá',
                'price' => 590000000,
                'type' => 'Apartamento',
                'lat' => 4.717220,
                'lng' => -74.034331,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Plaza Empresarial Salitre',
                'location' => 'Salitre, Bogotá',
                'price' => 1250000000,
                'type' => 'Oficina',
                'lat' => 4.657643,
                'lng' => -74.106657,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
