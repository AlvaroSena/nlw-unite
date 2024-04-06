import { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data: {
      id: 'e9f54327-c5a4-4e0a-a758-397ed5bb065c',
      title: 'Unite Summit',
      slug: 'unite-summit',
      details: 'Um evento para devs que gostam de programar',
      maximumAttendees: 120,
    },
  })
}

seed().then(() => {
  console.log('Database seeded')
  prisma.$disconnect()
})
