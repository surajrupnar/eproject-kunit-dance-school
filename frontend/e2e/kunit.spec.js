const { test, expect } = require('@playwright/test')

const WHATSAPP_NUMBER = '919665532331'

const advertisedCourses = [
  { name: 'Hip Hop' },
  { name: 'Contemporary' },
  { name: 'Bollywood' },
]

async function openCourseDetails(page, courseIndex) {
  await page.goto('/courses')
  await page.getByRole('button', { name: 'Details →' }).nth(courseIndex).click()
  const dialog = page.getByRole('dialog', { name: /details/i })
  await expect(dialog).toBeVisible()
  return dialog
}

function highlightColumns(dialog) {
  return dialog.locator('ul').evaluate(el =>
    getComputedStyle(el).gridTemplateColumns.split(' ').filter(Boolean).length
  )
}

test.beforeEach(async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
})

test.describe('A visitor exploring the K Unit Dance School website', () => {
  test('can open the home page and see the school brand', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByAltText('K Unit Dance logo')).toBeVisible()
    await expect(page.getByText('Professional Dance Training')).toBeVisible()
  })

  test('can reach the courses page from the main navigation', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'Courses', exact: true }).click()
    await expect(page).toHaveURL(/\/courses$/)
    await expect(page.getByRole('heading', { name: 'Our Courses' })).toBeVisible()
  })

  test('sees every advertised course on the courses page', async ({ page }) => {
    await page.goto('/courses')
    for (const course of advertisedCourses) {
      await expect(page.getByRole('heading', { name: course.name, exact: true })).toBeVisible()
    }
  })
})

test.describe('The course details popup', () => {
  test('opens when a visitor clicks Details on a course', async ({ page }) => {
    const dialog = await openCourseDetails(page, 0)
    await expect(dialog.getByRole('heading', { name: 'Hip Hop' })).toBeVisible()
  })

  test('shows the full course description, the highlights list, and the course photos', async ({ page }) => {
    const dialog = await openCourseDetails(page, 0)
    await expect(dialog.getByText('High-energy urban dance classes')).toBeVisible()
    await expect(dialog.getByRole('heading', { name: "Styles you'll learn" })).toBeVisible()
    await expect(dialog.locator('ul li')).toHaveCount(7)
    await expect(dialog.locator('img')).toHaveCount(3)
  })

  test('lays a list of more than five highlights out in two columns', async ({ page }) => {
    const dialog = await openCourseDetails(page, 0)
    expect(await highlightColumns(dialog)).toBe(2)
  })

  test('keeps a list of five or fewer highlights in a single column', async ({ page }) => {
    const dialog = await openCourseDetails(page, 1)
    expect(await highlightColumns(dialog)).toBe(1)
  })

  test('closes when the visitor clicks the close button', async ({ page }) => {
    const dialog = await openCourseDetails(page, 0)
    await dialog.getByRole('button', { name: 'Close details' }).click()
    await expect(dialog).toBeHidden()
  })

  test('closes when the visitor presses the Escape key', async ({ page }) => {
    const dialog = await openCourseDetails(page, 0)
    await page.keyboard.press('Escape')
    await expect(dialog).toBeHidden()
  })

  test('closes when the visitor clicks outside the popup', async ({ page }) => {
    const dialog = await openCourseDetails(page, 0)
    await page.mouse.click(5, 5)
    await expect(dialog).toBeHidden()
  })

  test('lets a visitor start enrolling via WhatsApp with the course name included', async ({ page, context }) => {
    const dialog = await openCourseDetails(page, 0)
    const popupPromise = context.waitForEvent('page')
    await dialog.getByRole('button', { name: /Enroll Now via WhatsApp/ }).click()
    const popup = await popupPromise
    expect(popup.url()).toContain(WHATSAPP_NUMBER)
    const message = new URLSearchParams(new URL(popup.url()).search).get('text')
    expect(message).toContain('Hip Hop')
  })
})

test.describe('The diploma certification program', () => {
  test('advertises all three certification levels', async ({ page }) => {
    await page.goto('/courses')
    await expect(page.getByRole('heading', { name: 'Foundation Course' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Intermediate Course' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Advanced Course' })).toBeVisible()
  })
})

test.describe('Brochure and contacting the school', () => {
  test('offers a downloadable brochure', async ({ page }) => {
    await page.goto('/courses')
    const link = page.getByRole('link', { name: 'Download Brochure' })
    await expect(link).toHaveAttribute('download', '')
    await expect(link).toHaveAttribute('href', /\.pdf$/)
  })

  test('lets a visitor request information via WhatsApp', async ({ page, context }) => {
    await page.goto('/courses')
    const popupPromise = context.waitForEvent('page')
    await page.getByRole('button', { name: 'Get in Touch' }).click()
    const popup = await popupPromise
    expect(popup.url()).toContain(WHATSAPP_NUMBER)
  })
})
