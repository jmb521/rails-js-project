class StudentSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :classroom_id
end
