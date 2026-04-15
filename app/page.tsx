'use client'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BookOpen, PenTool, Headphones, Mic, TrendingUp, Award, Clock, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  // Dados simulados para visualização (serão substituídos pelo Supabase depois)
  const stats = [
    { title: 'Progresso Total', value: '12%', icon: TrendingUp, color: 'text-blue-600 bg-blue-50' },
    { title: 'Aulas Concluídas', value: '4', icon: CheckCircle, color: 'text-emerald-600 bg-emerald-50' },
    { title: 'Próxima Aula', value: 'A2.1', icon: Clock, color: 'text-orange-600 bg-orange-50' },
    { title: 'Dias Seguidos', value: '5', icon: Award, color: 'text-purple-600 bg-purple-50' },
  ]

  const skills = [
    { name: 'Reading', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50', desc: 'Compreensão de textos' },
    { name: 'Writing', icon: PenTool, color: 'text-emerald-600', bg: 'bg-emerald-50', desc: 'Produção escrita' },
    { name: 'Listening', icon: Headphones, color: 'text-purple-600', bg: 'bg-purple-50', desc: 'Compreensão auditiva' },
    { name: 'Speaking', icon: Mic, color: 'text-orange-600', bg: 'bg-orange-50', desc: 'Expressão oral' },
  ]

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Olá, Aluno! 👋</h1>
            <p className="text-slate-500 mt-1">Continue onde parou no seu nível A2.</p>
          </div>
          <Button variant="outline">Ver Perfil</Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <Card key={i} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Selection */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-4">Escolha uma Habilidade</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <Card key={i} className="group hover:border-blue-300 transition-colors cursor-pointer">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className={`p-4 rounded-xl ${skill.bg} ${skill.color} group-hover:scale-110 transition-transform`}>
                    <skill.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-slate-900">{skill.name}</h3>
                    <p className="text-sm text-slate-500 mt-1">{skill.desc}</p>
                  </div>
                  <Link href="/module/A1.1-RD" className="w-full">
                    <Button className="w-full mt-2 group-hover:bg-blue-700">Começar</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
