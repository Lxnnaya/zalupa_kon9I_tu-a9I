<script lang="ts">
import {defineComponent} from "vue";
import {mapGetters} from "vuex";
import axios from "axios";

export default defineComponent({
  computed: {
    ...mapGetters(['user'])
  }
})
</script>

<template>
  <div class="header__back">
    <div class="header__content">
      <img :src="require('../img/mechanic-man-logo-handyman-for-service-repairman-or-maintenance-mascot-concept-cartoon-character-design-isolated-illustration-png.webp')" alt="">
      <div class="header__name">
        Edu<span>Shelf</span> - помощник студента машиностроителя
      </div>
      <div class="header__title">Сборник электронных учебников *УЗ*</div>
      <div class="header__row">
        <router-link to="/books">Перейти к учебникам</router-link>
        <router-link v-if="user !== null " to="/projects">Написание работ</router-link>
        <router-link v-if="user === null " to="/login">Написание работ</router-link>
      </div>
    </div>
  </div>
  <div class="main__books">
    <div class="main__books_name">Использование <span>Учебников</span></div>
    <div class="main__books_container">
      <img style="width:60%;height:60%"
           :src="require('../img/81d9bf75-b19a-4f31-b2fa-4ce2eb44286b.png')"
           alt="">
      <div class="main__books_content">
        <div class="main__books_title"><span style="font-weight: 500">Edu<span>Shelf</span></span> - хранилище учебников
          по машиностроению
          *УЗ*
        </div>
        <div class="main__books_list">
          <div class="books__list_item">
            <div></div>
            <div>Более 30 учебников</div>
          </div>
          <div class="books__list_item">
            <div></div>
            <div>Удобное использование</div>
          </div>
          <div class="books__list_item">
            <div></div>
            <div>Актуальная информация</div>
          </div>
        </div>
      </div>
    </div>
    <div class="main__books_button">
      <router-link to="/books">К учебникам</router-link>
    </div>
  </div>
  <div class="main__writing">
    <div class="main__writing_name">Написание работ</div>
    <div class="main__writing_cards">
      <div class="main__writing_card">
        <div class="writing_card_background">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAC40lEQVR4nO2dQW7UQBBFexWQJiIskIDLkFwkwBXCCDjCDHcJCUdgE+AEEFZkMUNWgFCyf6gVL1DkNuPBVd12/3cAV/3/u8c9slUOQQghhBBCCCGEEEKIDQHuA8+BU+AcuGa6XDcaT4BnUXu2hQLcBV4Bv6iXn8BL4I63+Y+BT7nVF8RH4JGn+Re5FRfIhXkIcatp5XfywfTnCHjdXV8Ac8vTTtcN9xjYB2ZhogCzRmM8BaX4AexZFI9HzRRHoTKAeYcfTy0KxnN+G29DpeDpCfA1UexJqBRufo7aOLcodpUothsqBdhNeHJlUayVUDl4+aIA2lEAtQcg2lEAmVEAEwxgnVvUiFhZBLDMrWpELCwC2GlC0E5Is2482hk8ACGEEEKIOmmOoW+A74z4GIitDrtj6Mj+iC0z61haBFDyyr/NZWYdlxYBjIqQWYcCSKAAMq9AMtffGrdCxn0NrUMBJFAATqAA8oICUABtZF9pXtCzr6F1uPmiANpRAAkSfmkHlBrA0GQX6gU9+xrcaS9f3AoZ92XmuLUvboWM+3J6r2mVXagX9OzL6YHMIrtQL+jZl/EbfqaPJCcRwGgpVSiF9lWNUArtqxqhFNpXNUIptK9qhFJoX9UIpWdfY34zbioBLBnpm3G9hHpBz74m92bc4IWM+zKz3NoXt0LGfZk5bu2LWyHjvswct/bFrZBxX0PrUAAJFIATVBRAkSPLyBgAcC9xud//Jarn0L79wYuNJ4ADz6F9qWGlJ4MXG08A7xKXO97mev8qFufl+47rLTiAZmx9isO+19t0dHGcl5/itNmSs6kGwM3o4oOOlW83uniD1IsipDVYc2Q9vj5+rKB4Qp4AzsxnBcWPFADfKJzgH0D05KGp+X+JeAC8p1xWHb2vjT7c4PMJk1tPlubNTac0Fk4PZKL2F1lHlMU7fpyXH0e2A186/jGXNKxjueVOiNo+N1oPzU47QgghhBBCCCGEECJMkT9t8zV1Ds3yCQAAAABJRU5ErkJggg==" alt="prototype">
        </div>
        <div>
          <div class="writing__card_content">
            <div class="writing__card_name">Шаблоны</div>
            <div class="writing__card_title">Шаблоны ускорят написание работ в разы,ведь теперь не придется вручную
              делать оформление той или иной работы
            </div>
          </div>
        </div>
      </div>
      <div class="main__writing_card">
        <div class="writing_card_background">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADD0lEQVR4nO2dTWoUQRiGOy4mLt0E4k7xFAoS4o0SEE+gMxcQojmCOxfD4M8tRHMAkxF1pYILF48MaUFCdU851lS99X31wECgh+n3rSddSaY6NV3XaDQajUaj0Wg0GgkADoHnwAfgB/m4AGbArkuRwB3gLeWZu5MA3AO+osPcjQTgFvAZPRbA9c46wBt0WZiWADxAn7nZ6aj/bSfET+AI2N/y+X1LAM4GCh9lOj+uJQDfB8ruZzq/758JQy1Ln9+NhKGGpc/P5XRjfzoSFjABXpq/ElQFdJfH7EtQFuBCgroA8xJqEGBaQi0CzEqoSYBJCbUJMCehRgGmJNQqwIyEmgWYkFC7gOolCAj4luLt8GolCAg4G4hwvMFr7Vb3LqqAgGcjS6LHwE3TEgQEHFIGDQlD6TJneE0ZZjl7DpUP4uTGsGXOnkPlgxTIcRf4knf88/cMFZcJBtwGXjUBhb8zgAPgBHg/cttMuwJqQulKryOYl56ywbz0lA3mpadsMC89ZYN56SkbzEtP2WBeesoG89JTNpiXnrLBvPSUDealp2wwLz1lg3npKRssMVfqrRZ+HgP31YJ5EPACuNGp4EzACbDTKeFIwClwrVPDkYCdwA1cq925lv2jzE5dXgRE3kea/95RbwJYfxNvXgmeBBB3B3VeCV4EED/4eSV4EMC/D34+CdYFsPng55FgWQD/P/jbl2BVAOkGf7sSLAog/eBvT4I1AcT/i9Imx/4cT/cXs0EBs5gBHDkeI3CaMrA1AcuYKWSsd8QU9illYC8CFn/P3+t6r5FwnjKwNQHTmHk7pvfIdPQkZWBrAia9hIv+MQ390Izt3Uu4+nqTlIFNCaiut0wQr71lgnjtLRPEa2+ZIF57p9qvpzaUBCTbr0cV4JGygKT79SgB7AEPgV/KAkrt15MVWQF9mKwbZJRAXYDqB7n5EFByv55cBPpGPc/8fj25CHSNep75/Xq2zOqjeN8BTwMdg5QZcYfQBJRltaoVcPCxcCw/EF68T7fY3ohaOZv1V8J5/3W6la5Go9FodNb5DUUJeeXg6sQAAAAAAElFTkSuQmCC" alt="import-file">
        </div>
        <div>
          <div class="writing__card_content">
            <div class="writing__card_name">Импорт</div>
            <div class="writing__card_title">Любую работу,написанную на EduShelf,можно импортировать в Word и
              пользоваться ей где угодно
            </div>
          </div>
        </div>
      </div>
      <div class="main__writing_card">
        <div class="writing_card_background">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFT0lEQVR4nO2cy48VRRSHW9QwjhoUFcfER6ILhiiDTwZQ/wSFOLp04wZXajQqKAgjEuNCN75iTNS9ujKiqPgaXIIujCMLlKgoig+YGSQCw2dOcm6iw62u7ttVt1/nS25C7tw+9as63dVd51dNkhiGYRiGYRiGYRiGYRiGYRg9AiwB1gM7gElgRj+T+p38bbgqA1w3vU6A64BPyM7HwDLTW3zgTwOeAmbJzwngSYnRr0TUTW8qwOnA6xTnNYllevMnYCPheLwPCaiVXl9nRoHjATt0HLjJ9GZPwPaUwfwJuA9YDAzqZxi4X//mYlvEBNRKr68zIymiJoAFKccuAHY6jj0JXNN2vV5k/nMI+hW4KMPxi4CDjhjr267XC/CRQ8zGHDE2OWJ80Ha9WcTsc4gZyRHjWkeM79quN4uYIw4xZ+WIMeiIcaTteot0aDBHjHMcMabbrjeLmO8dYpblrB31awqqld4sYj4McFPb7Iixve16s4h5zCHmN3lkK/hYt67ter0AS3UR0svC5jzPwubqtuvNBPA+bmT5/oAu5+Xp4Ww1PuS7/SnHvWt6sydgeYRi3I0RE1ArvY0s71IzvVkNGTFTohsyBPBu+6k36bPFt0XturycAMbTLL7QXnNsvaUhndbOZ2VHWi0mtncbWm9lUFNjnVYgZXqY1s+kLogeld8kFfGaQ+htHDTtZlknqJnX3DhokndbN2iadxsSLUjJ49uX+vwdgrVlebfAvYH6IGOxW8fGq7EngDuBKcIzWpZ3C6yI0J/DwB0xBt9VSSzKUFneLXBJpD7NBkuCXtIxzvwOAxGsQ6m8dmNmzu8GiMehINORzmv0MQEzDUmAMB4iAV9FFnlxWd6ttE1cdodIgGv6WVU4eEO8W+BmR3tTIYJ3JYjyBnm30caphAQsraN325gE1NFrbmICltfNu21UAupYjo6ZgL8dsS8NorwB3q2MRbRNu8CeaIsMD3XxblMWq5Mhgr/qCP4PMBakBx6q7N0CdwHHHDpeCdHALZ6z7Ok8e+wLallcFe9W+gw847k6V4Zq7D3PGfcD8DBwQQ+xz0hKAjizh2MuBB4BfvSMSbjHXuAy4A9Pg50r4nOtx4/p87msTOdLZ4GFshgCVgMbgNuBc4MJzd8vcdDu1qt4jWpbqFrnq/Yl2pfNuhDMcj86GPwhResdcrmH4BcpmCUVAbgeOBCob9PBph5HmWBvQYFS7bwyqRjAVSlmUFb2RvedZZ4H3iywIl3pmFfH1VcN5TV3Q2Lv0rZOuV+Jth5X4Cd1THLfA4skYhXwRU6hW7rEWa3uUb/5S+5BXfRszRlnItqUkwXgBuA54GePUFlRn99l8GcpD2n7ti5XuGv130H6+myV7mOd0oEsmO4BXtKnoa+1QnlU9nl2mXYOUT5/zp06gDc0Cfu1D9KXF7VvI5XZll4EnYerwqakbejmrqqwK2kbKV7zaMQ2XRuxDidtw3UqJg1tt3JYAkrGElAyloCSsQSUTMom3EUR2xzKsme0FQDfOgZjQ8Q2n3C0+U3SNlK85mPdimQB2luTUuks7t3WjZQNrajrtHXu1vUe2xnQWGlFvxVJGwG24a86PtjLfUG3nj+UoUr7TtJWgCuA3z0D1LkiPtX9N2O6L3RIz+4B/fewvkolv/kso3crO64vT9oMcGtkF8zFVKx3HOr6Zvy+Pg6++NL25vx/EbcMeLsPg/+WvEfwv8aNU3biud4VLsLOufaj4X9MfcHz0oUPOfZ5m+sLAMyT+Vr+SwPgZd2FsEc3Uh3VzwH9bkJ/s1aPmVekbcMwDMMwDMMwDMMwksD8C2O5u6FzrZ0FAAAAAElFTkSuQmCC" alt="groups--v1">
        </div>
        <div>
          <div class="writing__card_content">
            <div style="font-size:4.5vh" class="writing__card_name">Кооперативность</div>
            <div class="writing__card_title">Вы можете писать работы группой или в паре с другом,просто поделившись
              ссылкой доступа
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main__writing_button">
      <router-link :to="user === null ? '/login' : '/projects'">Опробовать</router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>