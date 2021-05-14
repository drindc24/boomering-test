class ChangePatientNumberDatatype < ActiveRecord::Migration[6.1]
  def change
    reversible do |dir|
      change_table :patients do |t|
        dir.up   { t.change :number, 'integer USING number::integer' }
        dir.down { t.change :number, :string }
      end
    end
  end
end
