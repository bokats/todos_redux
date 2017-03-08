# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Todo.destroy_all

todo1 = Todo.create!(title: "one", body: "body1", done: false)
todo2 = Todo.create!(title: "two", body: "body2", done: false)
todo3 = Todo.create!(title: "three", body: "body3", done: true)
