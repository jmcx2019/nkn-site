<template>
  <div class="div-team-item">
    <div class="row row-team-name">
      <img class="img-team-name" src="./../../assets/team/Name.png" alt="">
      {{ $t(memberName) }}
    </div>
    <div class="row row-team-line"></div>
    <div class="row row-team-tit">
      <p>{{ $t(memberTit1) }}</p>
      <p>{{ $t(memberTit2) }}</p>
    </div>
    <div class="row row-team-introduction">
      <div>{{ $t(memberIntroduction1) }}</div>
      <div>{{ $t(memberIntroduction2) }}</div>
      <div>{{ $t(memberIntroduction3) }}</div>
      <div>{{ $t(memberIntroduction4) }}</div>
      <div>{{ $t(memberIntroduction5) }}</div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "team-item-founder",
    props: ['member'], // 引入到组件中的数据/变量
    data() {
		  return {
		    memberName: 'team.' + this.member + '.name',
		    memberTit1: 'team.' + this.member + '.tit1',
		    memberTit2: 'team.' + this.member + '.tit2',
        memberIntroduction1: 'team.' + this.member + '.introduction1',
        memberIntroduction2: 'team.' + this.member + '.introduction2',
        memberIntroduction3: 'team.' + this.member + '.introduction3',
        memberIntroduction4: 'team.' + this.member + '.introduction4',
        memberIntroduction5: 'team.' + this.member + '.introduction5'
      }
    }
	}
</script>

<style scoped>
  .div-team-item {
    text-align: left;
    padding-right: 15px;
    padding-left: 15px;
    position: relative;
  }

  .img-team-name {
    width: 27px;
    margin-right: 10px;
  }

  .row-team-name {
    font-size: 24px;
    color: #253a7e;
  }
  .row-team-tit {
    margin-top: 10px;
    font-size: 18px;
    color: #0071bc;
  }
  .row-team-line {
    margin-top: 10px;
    height: 2px;
    width: 158px;
    background-color: #253a7e;
  }
  .row-team-introduction {
    margin-top: 10px;
    font-size: 14px;
    color: #253a7e;
  }
</style>
