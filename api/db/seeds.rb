Item.delete_all

10.times do |i|
  Item.create(
    title: "Widget #{i}",
    summary: 'This is an awesome widget!',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, commodi.',
    cost: i*(rand*10).round(2)
  )
end
